import * as React from 'react'
import styled from 'styled-components'
import * as StatefulIcons from '../statefulIcons'
import polygon_up_white from '../../../assets/icons/polygon_up_white.svg'
import sound_on from '../../../assets/icons/sound_on.svg'
import { motion } from 'framer-motion'

const MenuContainer = styled.div`
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 20px;

    padding-top: 30px;
    padding-bottom: 30px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const DotsCol = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: black;
    padding-bottom: 20px;
`

const PaginationTextStyled = styled.div`
    color: #8a8a8a;
    font-family: Antonio-Regular;
    width: 200px;
    font-size: 14px;
    text-align: center;
    transform: rotate(90deg);
    letter-spacing: 9px;
    background-color: black;
    padding-left: 10px;
    padding-right: 10px;
`

const Line = styled.div`
    background-color: #787878;
    height: 100%;
    width: 1px;
`
// const ShortLine = styled.div`
//     background-color: #787878;
//     height: 10%;
//     width: 0px;
// `

const FirstRec = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: black;
    border: 1px solid #8f947f;
    height: 230px;
    width: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
`
const SecondRec = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: black;
    border: 1px solid #8f947f;
    height: 200px;
    width: 30px;
    font-size: 16px;

    font-family: Average-Regular;
`

const SoundRec = styled.div`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    background-color: #00e7ff14;
    border: 1px solid #3b3b3b;
    height: 40px;
    width: 40px;

    :hover {
        background-color: #005aff29;
    }
`

const SoundIcon = styled.img`
    height: 16px;
    cursor: pointer;
`

const OnHoverRef = styled.div`
    transition: all 200ms;
    :hover {
        transform: scale(1.2);
    }
`
export interface IPaginationMenuProps {
    goUp: any
    goDown: any
    paginationtext?: any
    down: boolean
    up: boolean
    currentSectionIndex: number
}

const MainThemePaginatorMenu: React.SFC<IPaginationMenuProps> = (props) => (
    <MenuContainer id="paginator">
        <div>
            <SoundRec>
                <motion.div whileTap={{ scale: 1.1 }}>
                    <SoundIcon src={sound_on} alt="sound" />
                </motion.div>
            </SoundRec>
        </div>

        <div style={{ paddingTop: '30px' }} />
        {/* <ShortLine />
        <div style={{ paddingTop: '20px' }} /> */}
        <DotsCol>
            <div data-menuanchor="god_1">
                <a href="#god_1">
                    <StatefulIcons.MainThemePaginatorDotIcon
                        height="26"
                        width="26"
                        isActive={
                            props.currentSectionIndex === 1 ? true : false
                        }
                    />
                </a>
            </div>
            <div data-menuanchor="god_2">
                <a href="#god_2">
                    <StatefulIcons.MainThemePaginatorDotIcon
                        height="26"
                        width="26"
                        isActive={
                            props.currentSectionIndex === 2 ? true : false
                        }
                    />
                </a>
            </div>

            <div data-menuanchor="god_3">
                <a href="#god_3">
                    <StatefulIcons.MainThemePaginatorDotIcon
                        height="26"
                        width="26"
                        isActive={
                            props.currentSectionIndex === 3 ? true : false
                        }
                    />
                </a>
            </div>
            <div data-menuanchor="god_4" onMouseDown={() => props.goDown()}>
                <a href="#god_4">
                    <StatefulIcons.MainThemePaginatorDotIcon
                        height="26"
                        width="26"
                        isActive={
                            props.currentSectionIndex === 4 ? true : false
                        }
                    />
                </a>
            </div>
        </DotsCol>

        <Line />

        <PaginationTextStyled>gods edition</PaginationTextStyled>
        <Line />

        <div style={{ paddingTop: '20px' }} />

        <FirstRec>
            <OnHoverRef
                data-menuanchor={`god_${props.currentSectionIndex - 1}`}
                style={{
                    opacity: props.up === true ? '1' : '0.3',
                    pointerEvents: props.up === true ? 'auto' : 'none',
                    cursor: props.up === true ? 'pointer' : 'disabled',
                }}
            >
                <motion.div whileTap={{ scale: 1.2 }}>
                    <a href={`#god_${props.currentSectionIndex - 1}`}>
                        <img src={polygon_up_white} alt="arrow" />
                    </a>
                </motion.div>
            </OnHoverRef>
            <OnHoverRef
                data-menuanchor={`god_${props.currentSectionIndex + 1}`}
                style={{
                    cursor: props.down === true ? 'pointer' : 'disabled',

                    opacity: props.down === true ? '1' : '0.3',
                    pointerEvents: 'auto',
                }}
            >
                <motion.div whileTap={{ scale: 1.2 }}>
                    <a href={`#god_${props.currentSectionIndex + 1}`}>
                        <div style={{ paddingTop: '10px' }} />
                        <img
                            style={{ transform: 'rotate(180deg)' }}
                            src={polygon_up_white}
                            alt="arrow"
                        />
                    </a>
                </motion.div>
            </OnHoverRef>
        </FirstRec>
        <SecondRec>
            <span style={{ transform: 'rotate(90deg)' }}>
                {props.paginationtext}
            </span>
        </SecondRec>
    </MenuContainer>
)

export default MainThemePaginatorMenu
