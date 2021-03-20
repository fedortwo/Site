
var x = JSON.parse(prompt("please"))

var size = Object.keys(x.positions).length
var positions = []
for (let i = 0; i < size; i++) {
    positions[i] = {
        "paid_quantity": x.positions[i].quantity,
        "paid_amount": {
            "value": x.positions[i].total_sum.value,
            "currency": "RUB"
        },
        "position": { "guid": x.positions[i].guid }
    }
}

json = {
    "processed_at": x.updated_at,
    "sum_by_card": {
        "value": x.total_sum.value,
        "currency": "RUB"
    },
    "sum_by_cash": {
        "value": 0,
        "currency": "RUB"
    },
    "total_sum": {
        "value": x.total_sum.value,
        "currency": "RUB"
    },
    "positions": positions,

    "fiscal_document": {
        "guid": "",
        "type_of": "string"
    },
    "bank_transactions": [
        {
            "guid": ""
        }
    ],
    "sale": {
        "guid": x.guid
    }
}

document.write(JSON.stringify(json, null, 4))