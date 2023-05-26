import '@testing-library/jest-dom';
import { toBeShorterThan } from './spec/utils/custom-matchers/toBeShorterThan';
import { toHaveDoneItem } from './spec/utils/custom-matchers/toHaveDoneItem';

import { toMatchDiffSnapshot } from 'snapshot-diff';

expect.extend({
    toBeShorterThan,
    toHaveDoneItem,
    toMatchDiffSnapshot
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