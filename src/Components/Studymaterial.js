import React from 'react'
import './Studymaterial.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Studymaterial() {
  return (
<div>
        {/* <div className="header">
          <img src="logo.png"
            alt="logo"
          />
        <div className="header-items">
          <p>StudyMaterial</p>
          <p>Assignments</p>
          <p>Exam</p>
          <p>ExamResult</p>
        </div>
        </div> */}
        <div>
        <nav>
          <input id="nav-toggle" type="checkbox"/>
          <img src="logo.png"/>
          <ul class="links">
            <li><a href="#home">Exam</a></li>
            <li><a href="#about">ExamResult</a></li>
            <li><a href="#work">Assignments</a></li>
            <li><a href="#projects">StudyMaterial</a></li>
          </ul>
          <label for="nav-toggle" class="icon-burger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </label>
        </nav>
        </div>

<br></br>
        <div className="title">
            <div className="list">
        <button >Btech<ExpandMoreIcon/></button>
        <button >Btech<ExpandMoreIcon/></button>
        <button >Btech<ExpandMoreIcon/></button>
        <button >Btech<ExpandMoreIcon/></button>
        <button >Btech<ExpandMoreIcon/></button>
            </div>
        </div>
<br></br>
        <div className="data">
            <h1>BTECH Study Materials</h1>
            <p>It is impossible for any student to complete a year’s worth of syllabus in a few days. Therefore, students are suggested to study on a daily basis. Doing so will help them in completing the syllabus on time. Also, they will get enough time for revision and practice before the annual exam.</p>
        </div>

<br></br> 
        <div className="sylabus">
        <h1>BTECH Syllabus</h1>
        </div>
        <div className="card">
            <h3><ArrowRightAltIcon/>sem1</h3>
            <h3><ArrowRightAltIcon/>sem2</h3>
            <h3><ArrowRightAltIcon/>sem3</h3>
            <h3><ArrowRightAltIcon/>sem4</h3>
            <h3><ArrowRightAltIcon/>sem5</h3>
            <h3><ArrowRightAltIcon/>sem6</h3>
            <h3><ArrowRightAltIcon/>sem7</h3>
            <h3><ArrowRightAltIcon/>sem8</h3>  
        </div>       
</div>
  )
}

export default Studymaterial