import React from 'react'
import { asyncComponent } from 'react-async-component'
import styled from 'styled-components'

const LoadingContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

const LoadingComponent = () => (
    <LoadingContent>
        Loading...
    </LoadingContent>
)

export const async = (comp: () => Promise<React.ComponentType<any>>) => {
    return asyncComponent({
        LoadingComponent,
        resolve: comp,
    })
}
