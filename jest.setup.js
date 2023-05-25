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
