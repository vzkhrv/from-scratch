import '@testing-library/jest-dom';
import { toBeShorterThan } from './spec/utils/custom-matchers/toBeShorterThan';
import { toHaveDoneItem } from './spec/utils/custom-matchers/toHaveDoneItem';

expect.extend({
    toBeShorterThan,
    toHaveDoneItem
});

jest.mock('src/utils/helpers', () => ({
    ...jest.requireActual('src/utils/helpers'),
    sayHi: jest.fn(() => 'Привет!'),
}));

jest.useFakeTimers();

const cryptoMock = {
    randomUUID: jest.fn(() => Math.random())
}

Object.defineProperty(window, 'crypto', {
    value: cryptoMock,
    writable: true,
})

const lSMock = {
    getItem: jest.fn().mockReturnValue(null),
    setItem: jest.fn(),
}

Object.defineProperty(window, 'localStorage', {
    value: lSMock,
    writable: true,
})