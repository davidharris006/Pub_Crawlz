import React from "react";

function MainButton(props) {
    return (
<div>
<button type="button" class="btn btn-primary btn-lg">{props.buttontext}</button>
</div>
    )
}

export default MainButton