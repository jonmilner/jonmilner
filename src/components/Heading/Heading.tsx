import classNames from "classnames"
import * as React from "react"

import "./index.css"

interface HeadingProps {
  /** Children */
  children: React.ReactNode
  /** Heading level */
  level: 1 | 2 | 3 | 4 | 5 | 6
  /** Heading size */
  size: "xxxl" | "xxl" | "xl" | "lg" | "md" | "sm" | "xs"
  /** Weight */
  weight?: "black" | "bold" | "semibold" | "medium" | "regular" | "light"
}

export class Heading extends React.Component<HeadingProps, {}> {
  static defaultProps = {
    weight: "bold",
  }

  public render() {
    const { children, level, size, weight } = this.props

    const Tag = `h${level}`

    return (
      <Tag
        className={classNames({
          "jm-c-heading": true,
          [`jm-c-heading--size-${size}`]: size,
          [`jm-c-heading--weight-${weight}`]: weight,
        })}
      >
        {children}
      </Tag>
    )
  }
}
