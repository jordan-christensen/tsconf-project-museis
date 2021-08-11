import * as React from 'react'

import { Btn, OBtn } from '../../../global/o'

import CloseBtn from './closeBtn'
import NakedBtn from './nakedBtn'
import PrimaryBtn from './primaryBtn'

export type BtnProps = {
    children?: React.ReactNode
    btn: Btn
    onClick?: any
    active?: boolean
    height?: string
    width?: string
}

class Button extends React.Component<BtnProps, {}> {
    renderIcon(props: BtnProps) {
        switch (props.btn) {
            // could either use the Object for suggestion:
            case OBtn.Primary:
                return <PrimaryBtn {...props} />

            case OBtn.Naked:
                return <NakedBtn {...props} />

            // or could also just use the suggestion from the type when typing the strings:
            case 'CLOSE':
                return <CloseBtn {...props} />

            default:
                console.log('please chose an icon')
        }
    }
    render() {
        return this.renderIcon(this.props)
    }
}

export default Button
