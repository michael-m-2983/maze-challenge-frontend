import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, Slider } from '@mantine/core';


/**
 * TODO list 
 * 
 * * Add labels to everything
 * * Use ComboBox instead of NativeSelect
 *  * Add language icons
 */
export default function Preferences(props: any) {
    return (
        <>
            {/* <b>Select Language</b>
            <br /> */}
            <LanguageSelect get={props.editorPrefs.language} set={(val: string) => props.setEditorPrefs({...props.editorPrefs, language: val})} />
            <br />
            <LineNumberSelect get={props.editorPrefs.lineNumbers} set={(val: string) => props.setEditorPrefs({...props.editorPrefs, lineNumbers: val})}/>
            <br />
            <ColorSchemeSelect get={props.editorPrefs.editorTheme} set={(val: string) => props.setEditorPrefs({...props.editorPrefs, editorTheme: val})}/>
            <br />
            <Slider
                min={8}
                max={20}

                value={props.editorPrefs.fontSize}

                onChange={(value) => props.setEditorPrefs({ ...props.editorPrefs, fontSize: value })}

                marks={[
                    { value: 8, label: '8px' },
                    { value: 12, label: '12px' },
                    { value: 14, label: '14px' },
                    { value: 16, label: '16px' },
                    { value: 20, label: '20px' },
                ]}
            />
        </>
    )
}

function LanguageSelect(props: any) {

    const languages = [
        "asm",
        "Awk",
        "Bash",
        "Basic",
        "BF",
        "Clojure",
        "Cobol",
        "CoffeeScript",
        "Cow",
        "Crystal",
        "C",
        "C#",
        "C++",
        "Dart",
        "Dash",
        "Dragon",
        "D",
        "Elf",
        "Elixir",
        "Erlang",
        "Forth",
        "Fortran",
        "Fsi",
        "F#",
        "GolfScript",
        "Go",
        "Groovy",
        "Haskell",
        "JavaScript",
        "Java",
        "Jelly",
        "Julia",
        "Kotlin",
        "Lisp",
        "LLVM",
        "Lua",
        "Matlab",
        "Nim",
        "OCaml",
        "Octave",
        "Paraoc",
        "Pascal",
        "Perl",
        "PHP",
        "Pony",
        "Powershell",
        "Prolog",
        "Pure",
        "Python2",
        "Python3",
        "Racket",
        "Raku",
        "Retina",
        "Rockstar",
        "Ruby",
        "Rust",
        "R",
        "Samarium",
        "Scala",
        "Smalltalk",
        "sqlite3",
        "Swift",
        "TypeScript",
        "vlang",
        "Vyxal",
        "Zig"
    ];

    return ComboBox(props, "Select Source Language", languages);
}

function LineNumberSelect(props: any) {
    return ComboBox(props, "Select Line Number Type", [
        "Normal",
        "Relative",
        "Off"
    ]);
}

function ColorSchemeSelect(props: any) {
    return ComboBox(props, "Select Editor Color Scheme", [
        "vs-dark",
        "vs",
        "hc-black",
        "hc-light"
    ]);
}

// TODO: search
function ComboBox(props: any, selectText: string, options: string[]) {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    // const [value, setValue] = useState<string | null>(null);

    const _options = options.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                //TODO setValue(val);
                props.set(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    pointer
                    rightSection={<Combobox.Chevron />}
                    onClick={() => combobox.toggleDropdown()}
                >
                    {props.get || <Input.Placeholder>{selectText}</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>{_options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}