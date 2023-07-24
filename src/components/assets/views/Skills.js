import { React, useEffect } from 'react';
import '../css/skillsStyle.css';
import { FaCode, FaTools, FaAws, FaGithub, FaReact, FaAngular } from "react-icons/fa";
import { SlFrame } from "react-icons/sl";
import { VscAzure } from "react-icons/vsc";
import { SiVisualstudio, SiAndroidstudio, SiHandlebarsdotjs, SiDotnet} from "react-icons/si";
import $ from 'jquery';
import { skillslang } from "../js/data.js";

export default function Skills() {
  useEffect(() => {
    // Add the JavaScript code here
    (function() {
      $(".skills-lang li")
        .find(".skills-bar")
        .each(function(i) {
          $(this)
            .find(".bar")
            .delay(i * 150)
            .animate(
              {
                width:
                  $(this)
                    .parents()
                    .attr("data-percent") + "%"
              },
              1000,
              "linear",
              function() {
                return $(this).css({
                  "transition-duration": ".5s"
                });
              }
            );
        });
    }.call(this));
  }, []);

  return ( 
    <div className="skills-container" id="skills">
        <div className="title">
          <span>Technical Skills</span>
        </div>
        <div class="skills-tools">
          <h2><FaTools class="icon"/>Tools</h2>
            <div class="Azure">
                <VscAzure style={{margin: "0px 0px 36px 100px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 115px"}}>Azure</h3>
            </div>
            <div class="AWS">
                <FaAws style={{margin: "0px 0px 36px 70px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 85px"}}>AWS</h3>
            </div>
            <div class="GitHub">
                <FaGithub style={{margin: "0px 0px 36px 70px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 75px"}}>GitHub</h3>
            </div>
            <div class="Visual">
                <SiVisualstudio style={{margin: "0px 0px 36px 110px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 66px"}}>Visual Studio/Code</h3>
            </div>
            <div class="Android">
                <SiAndroidstudio style={{margin: "0px 0px 36px 90px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 66px"}}>Android Studio</h3>
            </div>
        </div>

        <div class="skills-frame">
          <h2><SlFrame class="icon"/>Frameworks</h2>
          <div class="ASP">
                <SiDotnet style={{margin: "0px 0px 36px 115px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 115px"}}>ASP.Net</h3>
            </div>
            <div class="React">
                <FaReact style={{margin: "0px 0px 36px 52px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 66px"}}>React</h3>
            </div>
            <div class="Angular">
                <FaAngular style={{margin: "0px 0px 36px 70px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 75px"}}>Angular</h3>
            </div>
            <div class="Handlebars">
                <SiHandlebarsdotjs style={{margin: "0px 0px 36px 75px", fontSize: '75px'}}/>
                <h3 style={{margin: "-20px 0px 0px 66px"}}>Handlebars</h3>
            </div>
        </div>

        <div class="skills-lang">
          <h2><FaCode class="icon"/>Languages</h2>
          {skillslang.map((skillslang) => (
            <ul>
              <li data-percent={skillslang.percent}><span>{skillslang.name}</span>
                <div class="skills-bar">
                  <div class="bar"></div>
                </div>
              </li>
            </ul>
          ))}
        </div>
    </div>
  );
}