import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function Loading() {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <Spin indicator={<LoadingOutlined style={{fontSize: 100,}} spin />}/>
        </div>
    )
}

export default Loading
