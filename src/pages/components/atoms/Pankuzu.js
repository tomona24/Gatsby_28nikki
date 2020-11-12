import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { Styles, Responsive } from '../../../styles/style';
import {categoryMap} from "../../../styles/maps"

const PankuzuList = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 8px 0 0;
  ${Responsive("md")} {
    flex-direction: column;
  }
`
const Item = styled.li`
  color: ${Styles.COLOR.LIGHTGLAY};
  font-size: .8em;
  a {
      padding-right: 4px;
      padding-left: 4px;
  }
  span {
    font-family: 'Material Icons';
    font-size: 1.1rm;
    color: ${Styles.COLOR.DARK};
    vertical-align: text-top;
  }
`
const Pankuzu = (props) => {
    const { type, middle, article } = props;

    const createPath = (type) => {
        let middlePath = middle
        if (type !== "tag") {
            middlePath = categoryMap[middle].url
        }
        return middlePath
    }
    const createName = (type) => {
        let middleName = decodeURI(middle).slice(5)
        if (type !== "tag") {
            middleName = categoryMap[middle].name
        }
        return middleName
    }
    return (
            <PankuzuList>
            <Item>
                <span>place</span><Link to="/">TOP</Link>
            </Item>
            {middle ?
                <Item>
                      <span>chevron_right</span><Link to={`/${createPath(type)}`} >{createName(type)}</Link>
                </Item> : ""
            }
            {article ? 
                    <Item>
                         <span>chevron_right</span><Link to={`${article.to}`}>{article.name}</Link> 
                    </Item>
                    : ""
                }
        </PankuzuList>
    )
}

export default Pankuzu;