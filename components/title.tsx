import React from 'react';

type TitleLevel = 1|2|3|4|5|6
type TitleText = string
type CssId = string
type CssClass = string
type HexColor = string

export const Title = (
    level:TitleLevel,
    text:TitleText,
    cssClass:CssClass='',
    cssId:CssId='',
    color:HexColor='#e4e4e4'
) : JSX.Element => {

    color = color.replaceAll(/[^#a-fA-F0-9]/g, '')

    cssId = cssId.replaceAll(/[^a-z0-9-]/g, '')
    const CssId = /[a-z][a-z0-9-]*/.exec(cssId)

    cssClass = cssClass.replaceAll(/[^a-z0-9-]/g, '')
    const CssClass = /[a-z][a-z0-9-]*/.exec(cssClass)

    return React.createElement(`h${level}`, { id: CssId, className: CssClass, style: { color: color } }, text)
}
