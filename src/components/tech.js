import React from "react"
import Container from "../components/container.js"
import style from "../style/tech.module.scss"
import TechDiv from "../assets/techDiv.js"
import GatsDiv from "../components/gatsdiv.js"
import WpDiv from "../components/wpDiv.js"
import HtmlCss from "./htmlcss.js"

const Tech = () => {
    return (
      <Container>
        <div className={style.div}>
          <h2>
            <span>The most options</span>
          </h2>
          <p>
            Choosing the right technology for your website isn’t easy. Avery
            Websites proudly offers more options than any developer 
            in the High Country. From the new hotness in web development to the tried and true,
            we can decide on a plan that fits your needs and budget. 
          </p>
        </div>
        <TechDiv> 
          <GatsDiv />
        </TechDiv>
        <TechDiv>
          <WpDiv />
        </TechDiv>
        <TechDiv>
          <HtmlCss />
        </TechDiv>
      </Container>
    )
}

export default Tech