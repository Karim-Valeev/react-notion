import ImageBlockFile from '../../components/Note/NoteBlock/ImageBlockFile';
import { useEffect, useState } from 'react';
import { handleDownloadUrl } from '../../store/actions/NoteBlocksActions';
import LoaderImage from '../../components/Loaders/LoaderImage';

function ImageBlockFileContainer({ block }) {
    const [fileUrl, setFileUrl] = useState('');
    useEffect(async () => {
        const getFileUrl = await handleDownloadUrl(block);
        await setFileUrl(getFileUrl);
    }, [block]);
    return fileUrl === '' ? <LoaderImage /> : <ImageBlockFile url={fileUrl} />;
}

export default ImageBlockFileContainer;
