import React, { useRef, useEffect } from "react";

import { ReactComponent as SearchIcon } from "../../../../assets/svg/search.svg";

import InputIcon from "../inputIcon";

export default function InputSearch({
    label,
    onChange,
    timeToSource = 1000,
    ...rest
}) {
    const ref = useRef(null);
    let time = null;

    useEffect(() => {
        ref.current.addEventListener("keyup", handleKeyUp);
        return () => ref.current.removeEventListener("keyup", handleKeyUp);
    }, []);

    const handleKeyUp = event => {
        clearTimeout(time);
        time = setTimeout(() => onChange(event), timeToSource);
    };

    return (
        <InputIcon
            ref={ref}
            leftIcon={<SearchIcon />}
            label={label}
            {...rest}
        />
    );
}
