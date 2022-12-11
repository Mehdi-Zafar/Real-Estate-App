import { Button } from "@mui/material";
import Head from 'next/head'
import {BsFillHouseFill,BsFillTelephoneFill,BsEnvelopeFill} from 'react-icons/bs'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Real Estate | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero-section">
        <h1>Let us Guide you Home!</h1>
        <div className="btn-group">
            <Button variant="contained" color="secondary" href="#about">Learn More</Button>
            <Button variant="contained" color="success" href="#contact">Contact Us</Button>
        </div>    
      </div>
      <div id="about">
        <h1>About Us</h1>
        <p>
        Morbi id euismod mauris. Phasellus metus nulla, condimentum eu sollicitudin quis, gravida nec est. Donec consectetur lacus a augue commodo malesuada. In commodo, sapien ut tristique vestibulum, dui nisi ultrices erat, nec ullamcorper lectus urna vel metus. Vestibulum in semper tellus. Maecenas dignissim nunc quis metus interdum, ultrices hendrerit quam commodo. Sed vel dignissim est. Cras mattis, diam in maximus efficitur, turpis sem pharetra leo, et hendrerit odio leo at velit. Quisque ullamcorper est leo, quis aliquet leo interdum ut. Nunc molestie velit metus, sit amet rhoncus quam efficitur vel. Praesent ornare urna in iaculis cursus. Nullam dignissim quis libero eu eleifend.

Suspendisse neque nisi, rhoncus eget volutpat ac, faucibus aliquet quam. Etiam fringilla malesuada turpis. Etiam imperdiet dignissim dui quis luctus. Aliquam at turpis quis erat bibendum suscipit eu in justo. In at mauris vitae augue iaculis laoreet eget sagittis velit. Aenean gravida diam in laoreet varius. Donec in nisl in dui vehicula fermentum. Duis pulvinar tempor semper. Sed dictum posuere erat, vel condimentum dolor rhoncus vitae. Aliquam in ante scelerisque, tempor mi sit amet, aliquam nunc. Etiam ac lectus leo. Aliquam erat volutpat. Vestibulum sed nisi quam. Cras tincidunt feugiat arcu, ut scelerisque ex semper quis. Pellentesque suscipit odio nec aliquam pretium. Integer ornare erat a tempor ullamcorper.

Vestibulum mattis dictum luctus. Vestibulum ut orci sed elit vulputate ullamcorper. Pellentesque lacinia, nulla ac accumsan tristique, tellus mi elementum magna, vitae porttitor libero enim at elit. Duis posuere orci eu turpis gravida molestie. In faucibus magna nisl, ac porta eros dapibus quis. Mauris egestas, est nec vehicula varius, neque tortor facilisis diam, in malesuada turpis urna eu est. Morbi ultricies orci ante, non ultricies lectus ultrices sit amet. Sed sed nunc fermentum, dignissim leo a, pulvinar orci. Quisque sed dui nunc. Nullam et consequat leo. Quisque dictum dui id nisl tristique consectetur. Proin nec rhoncus leo.

Suspendisse consequat egestas erat, in fringilla ipsum congue nec. Nulla iaculis tempus erat, nec finibus nunc semper eu. Phasellus vestibulum lacinia orci nec malesuada. Donec nec ultricies eros. Aenean interdum quam non pretium vehicula. Proin tempus tincidunt ipsum, eu eleifend tortor tempor at. Nam tincidunt a mauris id finibus.
        </p>
      </div>
      <div id="contact">
        <h1>Connect With Us!</h1>
        <div className="contact-info">
          <div>
            <h1><BsFillHouseFill/></h1>
            <h3>VISIT US</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis culpa mollitia consequatur.</p>
            <h3>Hamdan Street, Falcon Tower, Abu&nbsp;Dhabi</h3>
          </div>
          <div>
            <h1><BsFillTelephoneFill/></h1>
            <h3>CALL US</h3>
            <p>Doloribus ea tenetur rerum quas sequi corporis autem alias assumenda delectus.</p>
            <h3>972163652200</h3>
          </div>
          <div>
            <h1><BsEnvelopeFill/></h1>
            <h3>EMAIL US</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos necessitatibus ut labore quibusdam, dicta quo. </p>
            <h3>email@realestate.com</h3>
          </div>
        </div>
      </div>
    </div>
    
  )
}

