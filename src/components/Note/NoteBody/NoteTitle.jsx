import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const defaultValues = {
    title: '',
};

function NoteTitle({ title, handleTitle }) {
    const { register, handleSubmit, setFocus, setValue } = useForm({ defaultValues });
    useEffect(() => {
        setFocus('title');
        setValue('title', title);
    }, [setFocus, setValue, title]);
    return (
        <div className="notion__title--block">
            <textarea
                {...register('title')}
                name="title"
                maxLength="128"
                id="title"
                className="notion__title"
                placeholder="Untitled"
                onBlur={handleSubmit(handleTitle)}
            />
        </div>
    );
}

export default NoteTitle;
