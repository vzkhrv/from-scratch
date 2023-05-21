import { prettyDOM, render, screen } from '@testing-library/react';
import { Input } from 'src/components/Input';
import ue from '@testing-library/user-event'

describe('Поле ввода', () => {
    const userEvent = ue.setup();

    it.todo('Ограничение на ввод более 32 символов');

    it('Поле доступно для ввода', async () => {
        const fn = jest.fn();
        render(<Input defaultValue="Hi!" onChange={fn} />);

        const inputEl = screen.getByRole('textbox');
        await userEvent.clear(inputEl);
        await userEvent.type(inputEl, 'Пример заголовка задачи');

        expect(inputEl).toHaveValue('Пример заголовка задачи');
    });
});
