import { UserSeeder } from './Users';
import { AccountSeeder } from './Accounts';
import { AccountTypeSeeder } from './AccountTypes';
import { TransactionSeeder } from './Transactions';
import { TransactionTypeSeeder } from './TransactionTypes';

export async function up (){
    try{
        UserSeeder.call("up");
        AccountTypeSeeder.call("up");
        AccountSeeder.call("up");
        TransactionTypeSeeder.call("up");
        TransactionSeeder.call("up");
    }catch(e){
        Promise.reject(e);
    }
};

export async function down(){
    try{
        TransactionSeeder.call("down");
        TransactionTypeSeeder.call("down");
        AccountSeeder.call("down");
        AccountTypeSeeder.call("down");
        UserSeeder.call("down");
    }catch(e){
        Promise.reject(e);
    }
}