while true:
    saldo=200000
    print ("    ATM     ")
    print ("""
    1)  Balance
    2)  Withdraw
    3)  Deposit
    4)  Quit
    """)

    try:
        Option=int(input("Enter option: "))
        except Exception as e:
            
