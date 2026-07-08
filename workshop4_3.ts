class BankAccount {
    constructor(public owner:string, public balance:number, ){
    }
    displayBal():void{
        console.log(`ชื่อบัณชี ${this.owner} มียอดคงเหลือ ${this.balance} บาท`)
    }
    deposit(amount: number):void{
        this.balance += amount
        console.log(`ชื่อบัณชี ${this.owner} ฝากเงิน ${amount} บาท ยอดคงเหลือ ${this.balance} บาท`)
    }
    withdraw(amount: number):void{
        if(this.balance >= amount){
        this.balance -= amount
        console.log(`ชื่อบัณชี ${this.owner} ถอนเงิน ${amount} บาท ยอดคงเหลือ ${this.balance} บาท`)
        }else{
            console.log(`ชื่อบัณชี ${this.owner} ต้องการถอนเงิน ${amount} บาท แต่ยอดคงเหลือเพียง ${this.balance} บาท`)
        }
    }
}
const account1 = new BankAccount("Patiphon",3800);
account1.displayBal();
account1.deposit(500);
account1.withdraw(1200);