import React from 'react'
import { Link } from 'gatsby'


export default function Footer() {
  return (
    <>
    <p style = {{marginTop:"15rem"}}></p>
    <div className="techwinx-footer">
      <style>
        {`
          
          .techwinx-footer {
            text-align:center;
            background-color:lightblue;
            padding: 2rem 0;
            margin-top:2rem;
          }
          .write-for-us {
            border:3px dashed #3A9FBF;
            width:25%;
            margin:3rem auto;
            font-size:1.5em;
            color:inherit;
            padding:0.5rem;
            cursor:pointer;
          }
          .write-for-us:hover {
            text-decoration:none;
            color:#3A9FBF;
          }
          .footer-links {
            display:flex;
            justify-content:center;
            margin:4rem 0 4rem 0;
          }
          .footer-links a {
            margin:0 3rem;
            font-size:1.2em;
            color:inherit;
            cursor:pointer;
          }
          .footer-links a:hover {
            color:#3A9FBF;
            text-decoration:none;
          }
          @media(max-width:750px){
            .footer-links {
              flex-flow: column wrap;
              margin:2rem 0 2rem 0;
            }
            .footer-links a {
              margin:0.5rem 0;
              font-size:1.5em;
            }
          }
        `}
      </style>
      <Link to = "/write-for-us" className="write-for-us">Write for us</Link>

      <div className="footer-links">
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/credits">Credits</Link>
        {/* <Link to = "./privacy">Privacy</Link> */}
      </div>

      <p>Content and graphics © 2020</p>
    </div>
    </>
  )
}