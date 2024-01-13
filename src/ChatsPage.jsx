import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatprops = useMultiChatLogic('37da5e0e-313f-4356-b1e4-5f5105a7e95d', props.user.username, props.user.secret)
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatprops} />
        <MultiChatWindow{...chatprops} style={{ height: '100%' }} />

    </div>
    )
}
export default ChatsPage