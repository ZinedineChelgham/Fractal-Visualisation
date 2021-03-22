class Branch {
    constructor(begin, end, strokeW) {
        this.begin = begin;
        this.end = end;
        this.finished = false;
        this.strokeW = strokeW;

    }

    show() {
        strokeWeight(this.strokeW);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    addBranches() {
        let generic = p5.Vector.sub(this.end, this.begin);  // point the top
        let right = generic.copy();
        let left = generic.copy();
        let mid  = generic.copy();
//6-4
        right.rotate(PI / 6 );
        left.rotate(-PI / 4);
        right.mult(0.75);
        left.mult(0.75);
       // mid.mult(0.75)
        
        let rightPoint = p5.Vector.add(this.end, right);
        let leftPoint = p5.Vector.add(this.end, left);
        //let midPoint = p5.Vector.add(this.end,mid);

        let myBranches = [];
        myBranches[0] = new Branch(this.end, leftPoint, this.strokeW * 0.75);
        myBranches[1] = new Branch(this.end, rightPoint, this.strokeW * 0.75);
       // myBranches[2] = new Branch(this.end, midPoint, this.strokeW * 0.70);
        return myBranches;
    }

}