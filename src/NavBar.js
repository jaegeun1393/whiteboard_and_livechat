import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class NabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formState: false,
      role:""
    };
  }

  render() {
  return (
    <div>

<section className="w-full px-8 text-gray-700 bg-white body-font">
    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">

        <Link to={"/"} className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
        <img style={{width:"195px", height:"33px"}} src={require('./logo.jpg')} />
        </Link>

        <div className="relative flex flex-col md:flex-row">
            <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                <Link to={"/BlogContents"} className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">News</Link>
                <Link to={"/Instructors"} className="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">Instructors</Link>
                <Link to={"/Testmonial"} className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">Testmonial</Link>
                <Link to={"/ClassContents"} className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">Class</Link>
                <Link to={"/ContactInformation"} className="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">Contact</Link>
            </nav>
            {
              this.state.formState === false && (
            <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                <Link to={"/Login"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                    Sign in
                </Link>
            </div>
              )
            }
            {
              this.state.formState === true && ( 
                <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                <Link to={"/dashboard/manager"} className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
                    Dashboard
                </Link>
            </div>
              )
            }
        </div>
    </div>
</section>

    </div>
  );
  }
}

export default NabBar;
