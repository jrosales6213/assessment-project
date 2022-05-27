import React , {useState} from 'react';

function InputTagForm({newTag, setNewTag}) {
    // const [newTag , setNewTag] = useState("");


    return (
        <div className="tag-section">
            <form className="tag-form">
                <input className="tag-input" type="text" placeholder="Add a Tag" value={newTag} onChange={(e) => setNewTag(e.target.value)}/>
            </form>
      </div>
    )
}

export default InputTagForm;