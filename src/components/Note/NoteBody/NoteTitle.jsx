import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { LINE_HEIGHT } from '../../../constants/textareaConstants';

const defaultValues = {
    title: '',
};

function NoteTitle({ title, handleTitle }) {
    const { register, handleSubmit, setValue } = useForm({ defaultValues });
    const [rows, setRows] = useState(1);

    const handleChange = (e) => {
        const lineHeight = LINE_HEIGHT;
        const previousRows = e.target.rows;
        e.target.rows = 1;

        const currentRows = ~~(e.target.scrollHeight / lineHeight);

        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }

        setRows(() => {
            return currentRows;
        });
    };

    useEffect(() => {
        setValue('title', title);
        setRows(() => {
            // double bitwise NOT, faster substitute for Math.floor()
            return ~~(document.querySelector('#title').scrollHeight / LINE_HEIGHT);
        });
    }, [setValue, title]);

    return (
        <div className="notion__title--block">
            <textarea
                {...register('title')}
                rows={rows}
                name="title"
                id="title"
                className="notion__title"
                placeholder="Untitled"
                onBlur={() => {handleSubmit(handleTitle)}}
                onInput={handleChange}
            />
        </div>
    );
}

export default NoteTitle;
