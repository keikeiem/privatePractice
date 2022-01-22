class PaletteMaker {
    constructor(args) {
        // 전역 옵션 처리
        // args.size
        // args.click
        // args.borderColor
        args = args || {};
        this.init(args);
    }

    option = null;

    init(args) {
        this.option = {};
        this.option.size = args.size || 3;
        this.option.click = args.click || function() {
            console.log('click item');
        };
        this.option.borderColor = args.borderColor || '#FF0000';
    }

    getOption() {
        return this.option;
    }

    MakePalette(containerid, option) {
        if (!containerid)
            return;

        let container = document.getElementById(containerid);
        if (!container)
            return;

        return new Palette(this, container, option || {});
    }
} 

class Palette {
    constructor(handler, container, args) {
        this.handler = handler;
        this.container = container;
        this.init(args);
        this.make();
    }

    // 변수
    option = null;
    selected = null;

    init(args) {
        this.option = {};
        
        const globalOption = this.handler.getOption();
        this.option.size = args.size || globalOption.size;
        this.option.click = args.click || globalOption.click;
        this.option.borderColor = args.borderColor || globalOption.borderColor;
    }

    make() {
        let colorArray = this.MakeColorSet(this.MakeNumberArray(this.option.size));
        for (let i = 0; i < colorArray.length; ++i) {
            this.container.append(this.MakeColorItem(colorArray[i]));
        }
    }

    ConvertDecToHex(number) {
        if (number < 10)
            return number;

        switch (number) {
            case 10: return 'A';
            case 11: return 'B';
            case 12: return 'C';
            case 13: return 'D';
            case 14: return 'E';
            case 15: return 'F';
        }
    }

    MakeNumberArray(size) {
        size = size || 3;
        let result = [];
        for (let i = 0; i < 16; i += size) {
            result.push(this.ConvertDecToHex(i));
        }
        return result;
    }

    MakeColorSet(numArray) {
        let result = [];
        numArray.forEach(function(r) {
            numArray.forEach(function(g) {
                numArray.forEach(function(b) {
                    result.push('#' + r + g + b);
                });
            });
        });
        return result;
    }

    MakeColorItem(color) {
        const item = document.createElement('div');
        item.className = 'colorItem';
        item.style.backgroundColor = color;

        if (this.option.borderColor)
            item.style.borderColor = this.option.borderColor;
        if (this.option.click)
            item.onclick = this.option.click.bind(this, color);
        
        return item;
    }
}