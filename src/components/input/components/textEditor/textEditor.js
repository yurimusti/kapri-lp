import React, { useState, useEffect } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { notification } from "antd";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import Bold from "./svg/bold.svg";
import Italic from "./svg/italic.svg";
import Underline from "./svg/underline.svg";
import Strikethrough from "./svg/strikethrough.svg";
import Superscript from "./svg/superscript.svg";
import Subscript from "./svg/subscript.svg";

import Undo from "./svg/undo.svg";
import Redo from "./svg/redo.svg";

import Indent from "./svg/indent.svg";
import Outdent from "./svg/outdent.svg";

import Ordered from "./svg/unordered.svg";
import Unordered from "./svg/ordered.svg";
import Left from "./svg/left.svg";
import Right from "./svg/right.svg";
import Center from "./svg/center.svg";
import Justify from "./svg/justify.svg";

import Link from "./svg/hiperlink.svg";
import Unlink from "./svg/unlink.svg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContainerTextEditor, ContainerValidate } from "../../styles";

import "./index.scss";

import ButtonToolbar from "./components/buttonToolbar";

const configToolbar = {
    options: [
        "inline",
        // "blockType"
        // "fontSize",
        // "fontFamily",
        "list",
        "textAlign",
        // "colorPicker",
        "link",
        // "embedded",
        // "emoji",
        // "image",
        // "remove",
        "history",
    ],
    inline: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            // "monospace",
            "superscript",
            "subscript",
        ],
        bold: { icon: Bold },
        italic: { icon: Italic },
        underline: { icon: Underline },
        strikethrough: { icon: Strikethrough },
        // monospace: { icon: Monospace },
        superscript: { icon: Superscript },
        subscript: { icon: Subscript },
    },
    link: {
        popupClassName: "demo-popup-custom",
        link: { icon: Link, className: "demo-option-custom" },
        unlink: {
            icon: Unlink,
            className: "demo-option-custom",
        },
    },
    blockType: {
        // inDropdown: true,
        // options: [
        //     "Normal",
        //     "H1",
        //     "H2",
        //     "H3",
        //     "H4",
        //     "H5",
        //     "H6",
        //     "Blockquote",
        //     "Code"
        // ],
        // className: undefined,
        // component: undefined,
        // dropdownClassName: undefined
    },
    fontSize: {
        // icon: fontSize,
        // options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
        // className: undefined,
        // component: undefined,
        // dropdownClassName: undefined
    },
    fontFamily: {
        // options: [
        //     "Arial",
        //     "Georgia",
        //     "Impact",
        //     "Tahoma",
        //     "Times New Roman",
        //     "Verdana"
        // ],
        // className: undefined,
        // component: undefined,
        // dropdownClassName: undefined
    },
    list: {
        inDropdown: false,
        dropdownClassName: undefined,
        options: ["indent", "outdent", "unordered", "ordered"],
        indent: { icon: Indent },
        outdent: { icon: Outdent },
        unordered: {
            icon: Unordered,
        },
        ordered: {
            icon: Ordered,
        },
    },
    textAlign: {
        inDropdown: false,
        className: undefined,
        component: undefined,
        dropdownClassName: undefined,
        options: ["left", "center", "right", "justify"],
        left: { icon: Left, className: undefined },
        center: { icon: Center, className: undefined },
        right: { icon: Right, className: undefined },
        justify: { icon: Justify, className: undefined },
    },
    colorPicker: {
        // icon: color,
        // className: undefined,
        // component: undefined,
        // popupClassName: undefined,
        // colors: [
        //     "rgb(97,189,109)",
        //     "rgb(26,188,156)",
        //     "rgb(84,172,210)",
        //     "rgb(44,130,201)",
        //     "rgb(147,101,184)",
        //     "rgb(71,85,119)",
        //     "rgb(204,204,204)",
        //     "rgb(65,168,95)",
        //     "rgb(0,168,133)",
        //     "rgb(61,142,185)",
        //     "rgb(41,105,176)",
        //     "rgb(85,57,130)",
        //     "rgb(40,50,78)",
        //     "rgb(0,0,0)",
        //     "rgb(247,218,100)",
        //     "rgb(251,160,38)",
        //     "rgb(235,107,86)",
        //     "rgb(226,80,65)",
        //     "rgb(163,143,132)",
        //     "rgb(239,239,239)",
        //     "rgb(255,255,255)",
        //     "rgb(250,197,28)",
        //     "rgb(243,121,52)",
        //     "rgb(209,72,65)",
        //     "rgb(184,49,47)",
        //     "rgb(124,112,107)",
        //     "rgb(209,213,216)"
        // ]
    },

    // remove: { icon: eraser, className: undefined, component: undefined },
    history: {
        inDropdown: false,
        options: ["undo", "redo"],
        undo: { icon: Undo, className: undefined },
        redo: { icon: Redo, className: undefined },
    },
};

export default function TextEditor({
    label,
    text = "",
    onChange,
    rows = 3,
    options = [],
    error = false,
    showValidateIcon = false,
    maxCharacter = 5000,
    ...rest
}) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [configToolbarOptions, setConfigToolbarOptions] = useState([]);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        setCurrentText(text);
        const contentBlock = htmlToDraft(text);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(
                contentBlock.contentBlocks
            );
            const editorStateInitial = EditorState.createWithContent(
                contentState
            );
            setEditorState(editorStateInitial);
        }
    }, [text]);

    useEffect(() => {
        const newOptions = options.map(item => {
            switch (item.type) {
                case "button":
                    return (
                        <ButtonToolbar {...item} editorState={editorState} />
                    );
                default:
                    return null;
            }
        });

        setConfigToolbarOptions(newOptions);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLengthOfSelectedText = () => {
        const currentSelection = editorState.getSelection();
        const isCollapsed = currentSelection.isCollapsed();

        let length = 0;

        if (!isCollapsed) {
            const currentContent = editorState.getCurrentContent();
            const startKey = currentSelection.getStartKey();
            const endKey = currentSelection.getEndKey();
            const startBlock = currentContent.getBlockForKey(startKey);
            const isStartAndEndBlockAreTheSame = startKey === endKey;
            const startBlockTextLength = startBlock.getLength();
            const startSelectedTextLength =
                startBlockTextLength - currentSelection.getStartOffset();
            const endSelectedTextLength = currentSelection.getEndOffset();
            const keyAfterEnd = currentContent.getKeyAfter(endKey);

            if (isStartAndEndBlockAreTheSame) {
                length +=
                    currentSelection.getEndOffset() -
                    currentSelection.getStartOffset();
            } else {
                let currentKey = startKey;

                while (currentKey && currentKey !== keyAfterEnd) {
                    if (currentKey === startKey) {
                        length += startSelectedTextLength + 1;
                    } else if (currentKey === endKey) {
                        length += endSelectedTextLength;
                    } else {
                        length +=
                            currentContent
                                .getBlockForKey(currentKey)
                                .getLength() + 1;
                    }

                    currentKey = currentContent.getKeyAfter(currentKey);
                }
            }
        }

        return length;
    };

    const beforeInputHandle = () => {
        const currentContent = editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText("").length;
        const selectedTextLength = getLengthOfSelectedText();

        if (currentContentLength - selectedTextLength > maxCharacter - 1) {
            notification.warn({
                message: "Atenção",
                description: `O limite de ${maxCharacter} caracteres foi atingido.`,
            });

            return "handled";
        }
    };

    const pastedTextHandle = pastedText => {
        const currentContent = editorState.getCurrentContent();
        const currentContentLength = currentContent.getPlainText("").length;
        const selectedTextLength = getLengthOfSelectedText();

        if (
            currentContentLength + pastedText.length - selectedTextLength >
            maxCharacter
        ) {
            notification.warn({
                message: "Atenção",
                description: `O texto informado excede o limite de ${maxCharacter} caracteres.`,
            });

            return "handled";
        }
    };

    return (
        <ContainerTextEditor rows={rows} error={error} {...rest}>
            <Editor
                toolbar={configToolbar}
                placeholder={label}
                editorState={editorState}
                wrapperClassName="text-editor"
                editorClassName="text-editor"
                localization={{
                    locale: "pt",
                }}
                onChange={value => {
                    const html = draftToHtml(value);

                    if (html.trim() === "<p></p>") {
                        onChange("");
                        setCurrentText("");
                    } else {
                        onChange(html);
                        setCurrentText(html);
                    }
                }}
                onEditorStateChange={value => setEditorState(value)}
                toolbarCustomButtons={configToolbarOptions}
                handleBeforeInput={beforeInputHandle}
                handlePastedText={pastedTextHandle}
            />
            <ContainerValidate>
                {showValidateIcon && error ? (
                    <ErrorIcon />
                ) : showValidateIcon && !!currentText ? (
                    <SuccessIcon />
                ) : null}
            </ContainerValidate>
        </ContainerTextEditor>
    );
}
