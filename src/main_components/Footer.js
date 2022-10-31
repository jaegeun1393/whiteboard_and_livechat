import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer class="p-4 bg-[#222429] sm:p-14">
                <div class="md:flex md:justify-between border-b border-gray-600">
                    <div class="mb-6 md:mb-0">
                        <Link to='' class="flex items-center max-w-[135px] max-h-[36px]">
                            <svg width="384" height="105" viewBox="0 0 384 105" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.9207 1C33.8946 1 26.0705 7.13137 23.8046 15.8066C26.7386 14.2924 29.8698 13.1171 33.1448 12.3292C35.6042 9.73703 39.0747 8.12174 42.9207 8.12174C46.7668 8.12174 50.2373 9.73706 52.6967 12.3292C55.9717 13.1171 59.1029 14.2925 62.0369 15.8067C59.771 7.1314 51.9469 1 42.9207 1ZM3.24726 52.5861C5.32887 32.1451 22.4668 16.6 42.9206 16.6C63.3745 16.6 80.5124 32.1451 82.594 52.5861L84.9685 75.9034C85.829 84.3529 86.2592 88.5778 85.2801 91.9615C83.7411 97.2805 79.8607 101.598 74.7501 103.677C71.499 105 67.2715 105 58.8166 105H27.0247C18.5697 105 14.3423 105 11.0911 103.677C5.98052 101.598 2.10016 97.2805 0.561123 91.9615C-0.417938 88.5778 0.0122942 84.353 0.872759 75.9034L3.24726 52.5861ZM23.1158 81.0347H23.5182L22.7846 86.9305C22.6364 88.1217 23.561 89.1739 24.756 89.1739C25.951 89.1739 26.8756 88.1217 26.7274 86.9305L25.9938 81.0347H62.7254C64.2169 81.0347 65.4261 79.8201 65.4261 78.3217C65.4261 76.8233 64.2169 75.6087 62.7254 75.6087H23.1158C21.6243 75.6087 20.4151 76.8233 20.4151 78.3217C20.4151 79.8201 21.6243 81.0347 23.1158 81.0347ZM11.6254 60.3267C10.7806 60.937 9.7332 59.975 10.3994 59.172C18.1111 49.8761 29.7451 43.9565 42.7604 43.9565C55.7757 43.9565 67.4096 49.8761 75.1214 59.172C75.7876 59.9751 74.7401 60.937 73.8953 60.3267C65.1391 54.0004 54.3846 50.2726 42.7604 50.2726C31.1361 50.2726 20.3817 54.0003 11.6254 60.3267Z" fill="white"></path><path d="M119.237 57.56C119.237 75.72 130.277 87.88 146.837 87.88C153.877 87.88 160.277 85.4 163.477 81.64L164.197 87H175.317V53H147.477V64.36H163.237V64.52C163.237 67.24 159.877 75.8 148.517 75.8C139.077 75.8 132.357 69.88 132.357 57.96C132.357 46.52 138.597 38.84 148.597 38.84C154.757 38.84 159.637 41.72 161.717 47.96H174.757C173.397 35.16 163.077 26.68 148.917 26.68C130.597 26.68 119.237 39.72 119.237 57.56ZM179.076 66.92C179.076 79.56 187.556 87.96 200.356 87.96C213.076 87.96 221.556 79.56 221.556 66.92C221.556 54.28 213.076 45.8 200.356 45.8C187.556 45.8 179.076 54.28 179.076 66.92ZM191.476 66.84C191.476 60.84 194.996 56.84 200.356 56.84C205.636 56.84 209.156 60.84 209.156 66.84C209.156 72.92 205.636 76.92 200.356 76.92C194.996 76.92 191.476 72.92 191.476 66.84ZM250.818 67.4C263.618 67.4 271.058 59.32 271.058 47.56C271.058 35.4 263.538 27.8 250.978 27.8H226.898V87H239.858V67.4H250.818ZM248.418 39.24C255.138 39.24 257.378 43.64 257.378 47.32C257.378 51.8 255.058 56.2 248.418 56.2H239.858V39.24H248.418ZM270.254 66.92C270.254 79.64 278.174 88.04 289.934 88.04C300.014 88.04 307.774 81.88 309.214 73.16H297.934C297.134 75.8 294.094 77.72 290.174 77.72C284.894 77.72 282.174 74.84 282.174 69.96H309.054V66.84C309.054 54.2 301.934 45.72 290.014 45.72C278.174 45.72 270.254 54.2 270.254 66.92ZM282.334 62.36C282.334 58.44 285.214 55.8 289.614 55.8C293.934 55.8 296.814 58.44 296.814 62.36H282.334ZM310.96 66.92C310.96 79.64 318.88 88.04 330.64 88.04C340.72 88.04 348.48 81.88 349.92 73.16H338.64C337.84 75.8 334.8 77.72 330.88 77.72C325.6 77.72 322.88 74.84 322.88 69.96H349.76V66.84C349.76 54.2 342.64 45.72 330.72 45.72C318.88 45.72 310.96 54.2 310.96 66.92ZM323.04 62.36C323.04 58.44 325.92 55.8 330.32 55.8C334.64 55.8 337.52 58.44 337.52 62.36H323.04ZM382.067 47C376.387 45.64 368.947 46.52 366.547 51.4L365.907 47.08H354.547V87H366.947V69.64C366.947 61.72 371.107 57.72 378.147 57.72H382.067V47Z" fill="white"></path></svg>
                        </Link>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 md:gap-14 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm text-gray-50 ">GoPeer</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Online Tutoring</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Mobile Tutoring App</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Help Center</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Apply for volunteer tutoring</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm text-gray-50 ">Our Company</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline ">Terms of Service</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Privacy Policy</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Safety & Security</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Honor Code</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Become a tutor</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Careers</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Find a tutor</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Pricing</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to="/" class="hover:underline">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm text-gray-50 ">Top Subjects</h2>
                            <ul class="text-gray-400">
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Algebra Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Calculus Tutors</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="text-gray-400">
                                <li class="mb-4 mt-10">
                                    <Link to='/' class="hover:underline">Spanish Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                                <li class="mb-4">
                                    <Link to='/' class="hover:underline">Reading Tutors</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="sm:flex sm:items-center sm:justify-between mt-3">
                    <span class="text-sm text-gray-500 sm:text-center">GoPeer, Inc. &copy; Copyright 2017-2022 All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <Link to='/' class="text-gray-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Facebook page</span>
                        </Link>
                        <Link to='/' class="text-gray-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Instagram page</span>
                        </Link>
                        <Link to='/' class="text-gray-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                            <span class="sr-only">Twitter page</span>
                        </Link>
                        <Link to='/' class="text-gray-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">GitHub account</span>
                        </Link>
                        <Link to='/' class="text-gray-400">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Dribbbel account</span>
                        </Link>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;