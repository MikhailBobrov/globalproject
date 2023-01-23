type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        // поскольку могут прилетать undefined, так как className необязательный
        ...additional.filter(Boolean),
        //  потому что массив возвращает Object.entries делаем деструктуризацию
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ');
}

// classNames("remove-btn", { hovered: false, selectable: true, red: false }, []);
