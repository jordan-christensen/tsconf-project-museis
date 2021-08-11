import React from 'react'

import { connect } from 'react-redux'
import { CategoriesReducerType, CategoryItemData } from 'reducer-types'
import { RootState } from 'typesafe-actions'
import CategoryCardsListMaker from '../organisms/listMaker/categoryCardsListMaker'

import GreyContainer from '../templates/containers/bodyContainers/greyContainer'
import MainContainer from '../templates/containers/pageContainers/mainContainer'
import { OCategory } from 'types'

type Props = {
    categories: CategoriesReducerType | null
}

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.categories,
    }
}

class Literature extends React.Component<Props> {
    componentDidMount() {}
    render() {
        let category_literature: CategoryItemData | null =
            this.props.categories !== null &&
            this.props.categories.data &&
            this.props.categories.data[OCategory.Literature]
                ? this.props.categories.data[OCategory.Literature]
                : null
        return (
            <MainContainer>
                <GreyContainer>
                    {category_literature !== null && (
                        <CategoryCardsListMaker
                            data={category_literature.data}
                            listID={category_literature.listID}
                            category={OCategory.Literature}
                        />
                    )}
                </GreyContainer>
            </MainContainer>
        )
    }
}

export default connect(mapStateToProps, {})(Literature)
