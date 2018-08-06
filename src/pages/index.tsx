import * as React from "react"
import { Heading } from "../components"

import "../assets/css/index.css"

export default class IndexPage extends React.Component<{}> {
  public render() {
    return (
      <>
        <Heading {...{ level: 1, size: "xxxl" }}>Jon Milner</Heading>
        <Heading {...{ level: 2, size: "xxl", weight: "light" }}>
          Designer / Developer
        </Heading>
      </>
    )
  }
}
