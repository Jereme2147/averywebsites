import React from "react"
import Container from "../components/container.js"
import style from "../style/tech.module.scss"
import TechDiv from "../assets/techDiv.js"

const Tech = () => {
    return (
      <Container>
        <div className={style.div}>
          <h2>The right technology for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            pretium fusce id velit ut tortor pretium viverra suspendisse. Vitae
            auctor eu augue ut lectus arcu bibendum. Ornare massa eget egestas
            purus viverra accumsan. Consectetur adipiscing elit ut aliquam. Et
            pharetra pharetra massa massa ultricies mi quis hendrerit. Mauris
            ultrices eros in cursus turpis massa. Amet commodo nulla facilisi
            nullam. Enim facilisis gravida neque convallis. Morbi tristique
            senectus et netus et malesuada. Volutpat odio facilisis mauris sit
            amet massa.
          </p>
        </div>
        <TechDiv>
            Stuff goes here
        </TechDiv>
        <TechDiv>
            More stuff goes here
        </TechDiv>
      </Container>
    )
}

export default Tech