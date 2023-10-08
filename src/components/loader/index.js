import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const Loader = () => {
    return (


        <div style={{
            display: 'flex',
            justifycontent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vh',
            paddingLeft: '50%',
        }}> <LoadingOutlined
                style={{
                    fontSize: 54,
                }}

            />
        </div>

    )
}

export default Loader