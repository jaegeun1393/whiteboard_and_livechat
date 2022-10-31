import React, { useEffect, useRef, useState, Fragment, useLayoutEffect } from 'react'
import { fabric } from 'fabric'
import './style.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { GrMenu, GrClose, GrPowerReset } from 'react-icons/gr';
import { BsSquare, BsTriangle, BsCircle, BsPencil } from 'react-icons/bs';
import { FiShare2 } from 'react-icons/fi';
import { useParams } from "react-router-dom";
import ClassChat from "./class_chat";
import socket from "./public_socket";


const getSvgPathFromStroke = stroke => {
  if (!stroke.length) return "";
  let path = '';
  stroke.forEach(point => {
    point = point.join(' ');
    path += ' ' + point;
  });

  return path;
};


let canvas;
let newLine;
let newRectangle;
let newCircle;
let drawing = false;
let tool = 'line';
let origX;
let origY;
let circleX1;
let color = 'black';
let strokeSize = 3;

const FabricJSCanvas = () => {
  const [navActive, setNavActive] = useState(false);
  const [boxColor, setBoxColor] = useState('black');
  const [strokeBoxSize, setStrokeBoxSize] = useState(3);
  const [colorBoxOpen, setColorBoxOpen] = useState(false);
  const [strokeActive, setStrokeActive] = useState(false);
  const [userId, setUserId] = useState('');
  const sizeList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const canvasRef = useRef(null);
  const [myId, setMyId] = useState('');
  const [uid, setuid] = useState(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  const [data, setData] = useState([]);
  const { socketId } = useParams();
  const [link, setlink] = useState('');

  const onDraw = () => {
    const elements = canvas.getObjects()
    if (socketId) {
      socket.emit('onDraw', { userId: socketId, data: elements });
    } else {
      socket.emit('onDraw', { userId: uid, data: elements });
    }
  }

  useEffect(() => {

    socket.on('connect', () => {
      setMyId(socket.id);
      if (socketId) {
        socket.emit('getElements', { userId: socketId, myId: socket.id, userName: uid });
        setlink(socketId);
      } else {
        setlink(socket.id);
      }
    });

    socket.on('getElements', ({ Id, userName: Name }) => {
      window.alert(`${Name} is connected`)
      const elements = canvas.getObjects();
      socket.emit('sendElements', { myId: Id, elements });
    });

    socket.on('revieveElement', ({ elements: userElements }) => {
      console.log(userElements);
      setData([...userElements]);
    });

    socket.on('onDraw', ({ data: userData }) => {
      console.log(userData);
      setData([...userData]);
    });

    return () => {
      socket.off();
    }

  }, []);

  useLayoutEffect(() => {
    const options = {
      selection: false
    }
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerWidth, window.innerWidth);

    canvas = new fabric.Canvas(canvasRef.current, options);

    if (data.length !== 0) {
      data.forEach(({ type, width, height, top, left, stroke, strokeWidth, fill, radius, angle, x1, x2, y1, y2, path, src, scaleX, scaleY, skewX, skewY }) => {
        switch (type) {
          case 'rect':
            newRectangle = new fabric.Rect({
              width,
              height,
              top,
              left,
              stroke,
              strokeWidth,
              fill,
              angle,
              scaleX, scaleY, skewX, skewY
            });
            canvas.add(newRectangle);
            canvas.requestRenderAll();
            break;
          case "circle":
            newCircle = new fabric.Circle({
              left,
              top,
              radius,
              stroke,
              strokeWidth,
              fill,
              angle,
              scaleX, scaleY, skewX, skewY
            });
            canvas.add(newCircle);
            canvas.requestRenderAll();
            break;
          case 'line':
            newLine = new fabric.Line([left, top, width + left, height + top], {
              stroke,
              strokeWidth,
              angle,
              scaleX, scaleY, skewX, skewY
            });
            canvas.add(newLine);
            canvas.requestRenderAll();
            break;
          case 'path':
            const stroke22 = getSvgPathFromStroke(path);
            const pencil = new fabric.Path(stroke22, {
              stroke,
              strokeWidth,
              angle,
              fill: 'transparent',
              scaleX, scaleY, skewX, skewY
            });
            canvas.add(pencil);
            canvas.requestRenderAll();
            break;
          case "image":
            console.log(width, height)
            fabric.Image.fromURL(src, function (img) {
              // img.set('left',left).set('top',top).set('height',height).set('width',width).set('angle',angle);
              img.set({ left, top, width, height, angle, scaleX, scaleY, skewX, skewY })
              canvas.add(img);
              canvas.requestRenderAll();
            });
            break;
        }
      });
    }
    return () => {
      canvas.dispose()
    }

  }, [data]);

  const handelPencil = () => {
    canvas.off('mouse:down', handleMouseDown);
    canvas.off('mouse:move', handleMouseMove);
    canvas.off('mouse:up', handleMouseUp);
    canvas.isDrawingMode = true;
    setStrokeActive(!strokeActive);
    tool = 'pencil';
  }

  function handleMouseDown(o) {
    const pointer = canvas.getPointer(o.e);
    drawing = true;
    if (tool == 'line') {
      console.log(pointer);
      newLine = new fabric.Line([pointer.x, pointer.y, pointer.x, pointer.y], {
        stroke: color,
        strokeWidth: 3
      });
      canvas.add(newLine);
      canvas.requestRenderAll();
    } else if (tool == 'rectangle') {
      origX = pointer.x;
      origY = pointer.y;
      newRectangle = new fabric.Rect({
        width: 0,
        height: 0,
        top: pointer.y,
        left: pointer.x,
        stroke: color,
        strokeWidth: 3,
        fill: 'transparent'
      });
      canvas.add(newRectangle);
      canvas.requestRenderAll();
    } else if (tool == 'circle') {
      circleX1 = pointer.x;
      newCircle = new fabric.Circle({
        left: pointer.x,
        top: pointer.y,
        radius: 0,
        stroke: color,
        strokeWidth: 3,
        fill: 'transparent'
      });
      canvas.add(newCircle);
      canvas.requestRenderAll();
      canvas.selection = false;
    }
  };

  function handleMouseMove(o) {
    const pointer = canvas.getPointer(o.e);
    if (!drawing) {
      return false
    }

    if (tool == 'line') {
      console.log(pointer)
      newLine.set({
        x2: pointer.x,
        y2: pointer.y
      });
    } else if (tool == 'rectangle') {
      let x = Math.min(pointer.x, origX);
      let y = Math.min(pointer.y, origY);
      let w = Math.abs(origX - pointer.x);
      let h = Math.abs(origY - pointer.y);
      newRectangle.set('top', y).set('left', x).set('height', h).set('width', w)
    } else if (tool == 'circle') {
      newCircle.set('radius', Math.abs(pointer.x - circleX1));
    }
    canvas.requestRenderAll();
  };

  const handleMouseUp = event => {
    drawing = false;
  };

  return (
    <>
        <ClassChat
        uid={uid}
        socketId={link}
        socket = {socket}
      />

      <div className='box' onMouseMove={() => onDraw()}>
        <nav className={`left_nav ${navActive ? 'active' : ''}`}>
          <div className='buttons'>
            {
              !socketId &&
              <CopyToClipboard text={`${window.location.href}/${myId}`}>
                <button title='copy share link'><FiShare2 /></button>
              </CopyToClipboard>
            }
          </div>
        </nav>
        {navActive
          ?
          <span className='menu'><GrClose onClick={() => setNavActive(!navActive)} /></span>
          :
          <span className='menu'><GrMenu onClick={() => setNavActive(!navActive)} /></span>
        }
        
        <nav className='top_nav'>
          <button
            id="pencil"
            onClick={handelPencil}
          ><BsPencil />
          </button>
        </nav>
        <canvas
          id="canvas"
          width={window.innerWidth}
          height={window.innerHeight}
          ref={canvasRef}
          style={{ overflow: 'auto' }}
        >
        </canvas>
      </div>
    </>);
}
export default FabricJSCanvas;