import bridgeMock, { callReceiveOnlyMethod } from './';

// @ts-ignore
window.vkBridgeMock = window.vkConnectMock = bridgeMock;
// @ts-ignore
window.vkBridgeCallReceiveOnlyMethod = callReceiveOnlyMethod;
