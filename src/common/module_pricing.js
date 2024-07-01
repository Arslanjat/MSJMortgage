//compile: npx browserify -r ./module_pricing.js > bundle.js

import axios from 'axios';

const createAlert = function(params) {

	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	var theUrl = "https://1smtg.com/db/get_rates.php";
	xmlhttp.open("POST", theUrl);
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	axios.post("https://1smtg.com/db/get_rates.php", {
		"action": "create_alert",
		"product_type": params.product_type,
		"loan_amount": params.loan_amount,
		"ltv": params.ltv,
		"cltv": params.cltv,
		"loan_purpose": params.loan_purpose,					
		"amortization_type": params.amortization_type,
		"fixed_term": params.fixed_term,
		"arm_term": params.arm_term,
		"high_balance": params.high_balance,
		"down_payment": params.down_payment,
		"level_fico": params.level_fico,
		"units": params.units,
		"occupancy": params.occupancy, 
		"branch_id": params.branch_id,
		"relationship": params.relationship,
		"rate": params.rate,
		"pi": params.pi,
		"user_id": params.user_id,
		"contact_id": params.contact_id,
	}).then(function(res) {

		console.log(res)
	})
}

const getAPR = function(month, payment, amount) {

	// //////console.log.log(month + " " + payment + " " + amount);
	
	if (amount < 100) {

		return 0;
	}

	let error = 0.0000001; let high = 1.00; let low = 0.00;
    let rate = (2.0 * (month * payment - amount)) / (amount * month);

    if (rate < 0 || rate > 2) {

    	return 0
    }

    while(true) {
        // check for error margin
        let calc = Math.pow(1 + rate, month);
        calc = (rate * calc) / (calc - 1.0);
        calc -= payment / amount;

        if (calc > error) {
            // guess too high, lower the guess
            high = rate;
            rate = (high + low) / 2;
        } else if (calc < -error) {
            // guess too low, higher the guess 	
            low = rate;
            rate = (high + low) / 2;
        } else {
            // acceptable guess
            break;
        }
    }

    return rate * 12 * 100;
}


const findProducts = function(params, callback) {

	console.log("Searching...")


	let locks = ["lock8", "lock12", "lock15", "lock20", "lock21", "lock23", "lock30", "lock38", "lock45", "lock53", "lock60", "lock75", "lock90"]

	let respuesta = {}

	let ltv = params.ltv

	let best_rate = 10;

	axios.post("https://1smtg.com/db/get_rates.php", {
		"action": "search",
		"category_type": params.category_type,
		"product_type": params.product_type,
		"loan_amount": params.loan_amount,
		"ltv": params.ltv,
		"cltv": params.cltv,
		"loan_purpose": params.loan_purpose,					
		"amortization_type": params.amortization_type,
		"fixed_term": params.fixed_term,
		"arm_term": params.arm_term,
		"high_balance": params.high_balance,
		"streamline": params.streamline,
		"lpmi": params.lpmi,
		"limited_income": params.limited_income,
		"interest_only": params.interest_only,
		"down_payment": params.down_payment,
		"ft_home_buyer": params.ft_home_buyer,
		"ncsc": params.ncsc,
		"level_fico": params.level_fico,
		"units": params.units,
		"occupancy": params.occupancy, 
		"lenders": params.lenders,
		"selected_branch": params.selected_branch,
		"selected_relationship": params.selected_relationship,
		"lock_period": params.lock_period,
		"state": params.state,
		"self_employed": params.self_employed,
		"income_doc": params.income_doc,
		"bankruptcy": params.bankruptcy,
		"foreclosure": params.foreclosure,
		"deep_in_lieu": params.deep_in_lieu,
		"short_sale": params.short_sale,
		"mortgage_lates": params.mortgage_lates,
	}).then(function(res) {

		let products = res.data;

		respuesta.eligible_products = [];
		respuesta.ineligible_products = [];


		console.log("products from module", products)


		for (let product_index = 0; product_index < products.length; product_index++) {

			let product = products[product_index]

			//BEGIN NEW PRODUCT

			let new_product = product;


			new_product.new_rates = [];
			new_product.show_detail = false;
			new_product.adjustments = [];
			new_product.rate_adjustments = [];
			new_product.ineligible_reason = [];
			new_product.current_lock = params.lock_period;
			new_product.current_rate = null;
			new_product.show = true;

			//END

			//BEGIN ADJUSTMENTS

			let total_adjustments = 0;
			let total_rate_adjustments = 0;

			let has_second_home = false;
			let has_investment = false;
			let has_manufactured = false;
			let has_2unit = false;
			let has_3unit = false;
			let has_4unit = false;
			let has_escrow_waiver = false;
			let has_hbpurchase = false;
			let has_itin = false;
			let has_doctor = false;
			let has_construction = false;
			let has_Renovation = false;


			let has_cashout = false;						

			//PORTFOLIO ADJUSTMENTS

			product.adj_port_amount.forEach(function(adj, adj_index) {

				

				let adjustment = adj["ltv0_50"];
				let adjltv = " LTV <50";

				if (ltv > 50) {

					adjustment = adj["ltv50_55"];
					adjltv = " LTV 50-55";
				}

				if (ltv > 55) {

					adjustment = adj["ltv55_60"];
					adjltv = " LTV 55-60";
				}

				if (ltv > 60) {

					adjustment = adj["ltv60_65"];
					adjltv = " LTV 60-65";
				}

				if (ltv > 65) {

					adjustment = adj["ltv65_70"];
					adjltv = " LTV 65-70";
				}

				if (ltv > 70) {

					adjustment = adj["ltv70_75"];
					adjltv = " LTV 70-75";
				}

				if (ltv > 75) {

					adjustment = adj["ltv75_80"];
					adjltv = " LTV 75-80";
				}

				if (ltv > 80) {

					adjustment = adj["ltv80_85"];
					adjltv = " LTV 80-85";
				}

				if (ltv > 85) {

					adjustment = adj["ltv85_90"];
					adjltv = " LTV 85-90";
				}

				if (ltv > 90) {

					adjustment = adj["ltv90_95"];
					adjltv = " LTV 90-95";
				}

				if (ltv > 95) {

					adjustment = adj["ltv95_97"];
					adjltv = " LTV 95-97";
				}

				if (ltv > 97) {

					adjustment = adj["ltv97_more"];
					adjltv = " LTV 97+";
				}

				adjustment = parseFloat(adjustment * -1).toFixed(3);

				let new_adjustment = {
					type: "",
					value: 0
				}

				switch (adj.adj_type.trim()) {

					case "12mo Bank Stmt":

						if (params.income_doc == "Bank Stmts: 12 Mo. Personal" || params.income_doc == "Bank Stmts: 12 Mo. Bussiness") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;
					
					case "24mo Bank Stmt":

						if (params.income_doc == "Bank Stmts: 24 Mo. Personal" || params.income_doc == "Bank Stmts: 24 Mo. Bussiness") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "2-Unit":

						if (params.units == "2unit") {

							new_adjustment.type = adj.adj_type
							has_2unit = true
						}
						else {

							return
						}

						break;

					case "3-Unit":

						if (params.units == "3unit") {

							new_adjustment.type = adj.adj_type
							has_3unit = true

						}
						else {

							return
						}

						break;

					case "4-Unit":

						if (params.units == "4unit") {

							new_adjustment.type = adj.adj_type
							has_4unit = true

						}
						else {

							return
						}

						break;

					case "Cash-Out":

						if (params.loan_purpose == "lp_cashout") {

							new_adjustment.type = adj.adj_type
							has_cashout = true
						}
						else {

							return
						}

						break;

					case "Condo-NonWarrantable":

						return

						break;

					case "Condo-Warrantable":
						return

						break;

					case "D-PUD":
						return

						break;

					case "DSCR Not Applicable":

						if (params.income_doc == "DSCR / No Ratio DSCR") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Full Amortization":

						if (params.income_doc == "Full Doc" || params.income_doc == "Full Doc 12(Limited)") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Interest-Only":

						if (params.interest_only == "yes") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Loan Amount":

						if ((adj.adj_value == params.state || adj.adj_value == "") && parseFloat(params.loan_amount) >= parseFloat(adj.amount_from) && parseFloat(params.loan_amount) <= parseFloat(adj.amount_to)) {

							new_adjustment.type = `${adj.adj_type} ${adj.amount_from} - ${adj.amount_to}`
						}
						else {

							return
						}

						break;

					case "Modular":

						return

						break;

					case "Owner Occupied":

						if (params.occupancy == "primary") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "PUD":

						if (params.legal_structure == "pud") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Purchase":

						if (params.loan_purpose == "lp_purchase") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Rate-Term":

						if (params.loan_purpose == "lp_rt") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Rowhouse":
						return
						break;

					case "Rural Property":

						if (params.rural_property == "yes") {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Second Home":

						if (params.occupancy == "second") {

							new_adjustment.type = adj.adj_type
							has_second_home = true
						}
						else {

							return
						}

						break;

					case "SFR":
						return
						break;

					case "standard":

						new_adjustment.type = "Standard " + adj["fico_from"] + "-" +  adj["fico_to"]

						break;

					case "STATE":

						if (params.state == adj.adj_value) {

							new_adjustment.type = adj.adj_type
						}
						else {

							return
						}

						break;

					case "Townhouse":
						return
						break;

					case "FICO":
						new_adjustment.type = adj.adj_type + " " + adj["fico_from"] + "-" +  adj["fico_to"]

						break;
					case "Doctor":

						if (params.doctor == "yes") {

							new_adjustment.type = adj.adj_type
							has_doctor = true
						}
						else {

							return
						}

						break;
					case "One-Close Const 9-mo Term":

						if (params.construction == "yes") {

							new_adjustment.type = adj.adj_type
							has_construction = true
						}
						else {

							return
						}

						break;	
					case "One-Close Const 12-mo Term":

						if (params.construction == "yes") {

							new_adjustment.type = adj.adj_type
							has_construction = true
						}
						else {

							return
						}

						break;
					case "Renovation":

						if (params.Renovation == "yes") {

							new_adjustment.type = adj.adj_type
							has_Renovation = true
						}
						else {

							return
						}

						break;			
				}

				if (new_adjustment.type == "") {
					return
				}


				new_adjustment.value = adjustment;
				new_adjustment.type += adjltv;

				if (new_adjustment.value == 0) {
					return
				}

				product.adjustments.push(new_adjustment);

				total_adjustments += parseFloat(adjustment);

			});


			//STANDARD ADJUSTMENTS

			if (parseFloat(params.fixed_term) > 180 || params.category_type == 2) {

				product.price_adjustments.forEach(function(adj, adj_index) {

					let new_adjustment = {
						type: "FICO " + adj["fico_from"] + "-" +  adj["fico_to"],
						value: 0
					}

					let adjustment = adj["ltv0_60"];
					let adjltv = " LTV <60";

					if (ltv > 60) {

						adjustment = adj["ltv60_70"];
						adjltv = " LTV 60-70";
					}

					if (ltv > 70) {

						adjustment = adj["ltv70_75"];
						adjltv = " LTV 70-75";
					}

					if (ltv > 75) {

						adjustment = adj["ltv75_80"];
						adjltv = " LTV 75-80";
					}

					if (ltv > 80) {

						adjustment = adj["ltv80_85"];
						adjltv = " LTV 80-85";
					}

					if (ltv > 85) {

						adjustment = adj["ltv85_90"];
						adjltv = " LTV 85-90";
					}

					if (ltv > 90) {

						adjustment = adj["ltv90_95"];
						adjltv = " LTV 90-95";
					}

					if (ltv > 95) {

						adjustment = adj["ltv95_97"];
						adjltv = " LTV 95-97";
					}

					if (ltv > 97) {

						adjustment = adj["ltv97_more"];
						adjltv = " LTV 97+";
					}

					adjustment = parseFloat(adjustment * -1).toFixed(3);

					new_adjustment.value = adjustment;
					new_adjustment.type += adjltv;

					if (adj["rt"] == "no" && params.loan_purpose == "lp_rt") {
						return
					}

					if (adj["cashout"] == "no" && params.loan_purpose == "lp_cashout") {
						return
					}

					if (adj["purchase"] == "no" && params.loan_purpose == "lp_purchase") {
						return
					}

					product.adjustments.push(new_adjustment);

					total_adjustments += parseFloat(adjustment);

				});

			}


			// console.log ("product", product["name"])


				
			//CASHOUT ADJUSTMENTS



			if (params.loan_purpose == "lp_cashout") {

				product.co_adjustments.forEach(function(adj, adj_index) {

					let new_adjustment = {
						type: "FICO " + adj["fico_from"] + "-" +  adj["fico_to"],
						value: 0
					}

					let adjustment = adj["ltv0_60"];
					let adjltv = " Cashout LTV <60";

					if (ltv > 60) {

						adjustment = adj["ltv60_70"];
						adjltv += " Cashout LTV 60-70";
					}

					if (ltv > 70) {

						adjustment = adj["ltv70_75"];
						adjltv = " Cashout LTV 70-75";
					}

					if (ltv > 75) {

						adjustment = adj["ltv75_80"];
						adjltv = " Cashout LTV 75-80";
					}

					adjustment = parseFloat(adjustment * -1).toFixed(3);

					new_adjustment.value = adjustment;
					new_adjustment.type += adjltv;

					if (new_adjustment.value != 0) {

						product.adjustments.push(new_adjustment);

						has_cashout = true;
					}

					total_adjustments += parseFloat(adjustment);

				});

				if (!has_cashout && params.product_type != 3 && params.product_type != 5) {

					continue;
				}

			}		

			//LOAN AMOUNT ADJUSTMENTS

			product.amount_adjustments.forEach(function(adj, adj_index) {

				let new_adjustment = {
					type: "",
					value: 0
				}

				let adjustment = adj["value"];
				let adjrange = " Amount >= " + adj["amount_from"] + " <= " + adj["amount_to"];

				adjustment = parseFloat(adjustment * -1).toFixed(3);

				new_adjustment.value = adjustment;
				new_adjustment.type += adjrange;

				if (new_adjustment.value != 0) {

					product.adjustments.push(new_adjustment);
				}							

				total_adjustments += parseFloat(adjustment);

			});	


			//SUBFINANCING ADJUSTMENTS

			if (params.sub_financing == "yes") {


				product.sub_adjustments.forEach(function(adj, adj_index) {

					let new_adjustment = {
						type: "",
						value: 0
					}


					let adjustment = 0;


					if (params.level_fico < 720) {

						adjustment = adj["less_720"];
						new_adjustment.type += "Sub Financing FICO < 720";
					}
					else {

						adjustment = adj["from_720"];
						new_adjustment.type += "Sub Financing FICO >= 720";
					}								

					adjustment = parseFloat(adjustment * -1).toFixed(3);

					new_adjustment.value = adjustment;

					if (new_adjustment.value != 0) {

						product.adjustments.push(new_adjustment);
					}							

					total_adjustments += parseFloat(adjustment);

				});	

			}

				

			//SPECIAL ADJUSTMENTS


			

			let has_cashout2 = false;

			product.ms_adjustments.forEach(function(adj, adj_index) {

				let new_adjustment = {
					type: adj["adj_type"],
					baseType: adj["adj_type"],
					value: 0,
					adj_value: adj["adj_value"]
				}


				if (new_adjustment.type == "STATE") {

					if (adj["adj_value"] != params.state) {

						return;
					}

					new_adjustment.type += " " + adj["adj_value"];
				}

				if (new_adjustment.type == "STATE > 15") {

					if (adj["adj_value"] != params.state || parseInt(params.fixed_term) <= 180) {

						return;
					}

					new_adjustment.type += " " + adj["adj_value"];
				}

				if (new_adjustment.type == "STATE < 15") {

					if (adj["adj_value"] != params.state || parseInt(params.fixed_term) > 180) {

						return;
					}

					new_adjustment.type += " " + adj["adj_value"];
				}


				if (new_adjustment.type == "Primary Residence" && params.occupancy != "primary") {

					return;
				}

				if (new_adjustment.type == "2nd Home") {

					if (params.occupancy != "second") {

						return;
					}
					else {

						has_second_home = true;
					}

				}	

				if (new_adjustment.type == "Escrow Waiver") {

					has_escrow_waiver = true;
				}

				if (new_adjustment.type == "Self Employed" && params.self_employed != "yes") {

					return;
				}

				if (new_adjustment.type == "NON-OWNER") {


					if (params.occupancy != "investment") {

						return;
					}
					else {

						has_investment = true;
					}

				}

				if (new_adjustment.type == "Purchase" && params.loan_purpose != "lp_purchase") {

					return;
				}
				if (new_adjustment.type == "Doctor") {
					has_doctor = true

					if (params.doctor != "yes") {
						return;
					}

				}
				if (new_adjustment.type == "One-Close Const 9-mo Term") {
					has_construction = true

					if (params.construction != "yes") {
						return;
					}

				}
				if (new_adjustment.type == "One-Close Const 12-mo Term") {
					has_construction = true

					if (params.construction != "yes") {
						return;
					}

				}
				if (new_adjustment.type == "Renovation") {
					has_Renovation = true

					if (params.Renovation != "yes") {
						return;
					}

				}




				if (new_adjustment.type == "Purchase" && new_adjustment.adj_value != "") {

					let fico_data = new_adjustment.adj_value.split("-")

					if (fico_data.length > 1) {

						if (params.level_fico < parseFloat(fico_data[0]) || params.level_fico > parseFloat(fico_data[1])) {

							return
						}
					}
				}

				if (new_adjustment.type == "Rate & Term" && params.loan_purpose != "lp_rt") {

					return;
				}

				if (new_adjustment.type == "Cashout") {

					if (params.loan_purpose != "lp_cashout") {

						return;
					}

					has_cashout2 = true;

				}

				if (new_adjustment.type == "HB Purchase") {

					if (params.high_balance != "yes" || params.loan_purpose != "lp_purchase") {

						return;
					}

					has_hbpurchase = true;
				}

				if (new_adjustment.type == "HB Rate & Term" && (params.high_balance != "yes" || params.loan_purpose != "lp_rt")) {

					return;
				}

				if (new_adjustment.type == "HB Cashout" && (params.high_balance != "yes" || params.loan_purpose != "lp_cashout")) {

					return;
				}							

				if (new_adjustment.type == "ARM" && (params.amortization_type != "arm")) {

					return;
				}

				if (new_adjustment.type == "ARM Streamline" && (params.amortization_type != "arm" || params.streamline != "yes")) {

					return;
				}

				if (new_adjustment.type == "ARM Purchase" && (params.amortization_type != "arm" || params.loan_purpose != "lp_purchase")) {

					return;
				}

				if (new_adjustment.type == "ARM Rate & Term" && (params.amortization_type != "arm" || params.loan_purpose != "lp_rt")) {

					return;
				}

				if (new_adjustment.type == "ARM Cashout" && (params.amortization_type != "arm" || params.loan_purpose != "lp_cashout")) {

					return;
				}

				if (new_adjustment.type == "NOO ARM" && (params.amortization_type != "arm" || params.occupancy != "investment")) {

					return;
				}

				if (new_adjustment.type == "HB" && (params.high_balance != "yes")) {

					return;
				}

				if (new_adjustment.type == "HB ARM" && (params.high_balance != "yes" || params.amortization_type != "arm")) {

					return;
				}

				if (new_adjustment.type == "HB Cashout ARM" && (params.high_balance != "yes" || params.amortization_type != "arm" || params.loan_purpose != "lp_cashout")) {

					return;
				}

				if (new_adjustment.type == "HB ARM Streamline" && (params.high_balance != "yes" || params.amortization_type != "arm" || params.streamline != "yes")) {

					return;
				}

				if (new_adjustment.type == "HB 3-4 Units") {

					if (params.high_balance != "yes" || (params.units != "3unit" && params.units != "4unit")) {

						return;
					}
					else {

						has_3unit = true;
						has_4unit = true;
					}

				}

				if (new_adjustment.type == "3-4 Units") {


					if (params.units != "3unit" && params.units != "4unit") {

						return;
					}
					else {

						has_3unit = true;
						has_4unit = true;
					}
				}

				if (new_adjustment.type == "2-4 Units") {

					if (params.units != "2unit" && params.units != "3unit" && params.units != "4unit") {

						return;
					}
					else {

						has_2unit = true;
						has_3unit = true;
						has_4unit = true;
					}
				}

				if (new_adjustment.type == "2 Units") {

					if (params.units != "2unit") {

						return;
					}
					else {

						has_2unit = true;
					}

				}

				if (new_adjustment.type == ">4 Units" && (params.units != "2unit")) {

					return;
				}

				if (new_adjustment.type == "Refinance Charge" && (params.loan_purpose == "lp_purchase")) {

					return;
				}

				if (new_adjustment.type == "Condo-Hotel" && (params.legal_structure != "condo")) {
					return;
				}

				//PENDIENTE FILTRAR EL TERM
				if (new_adjustment.type == "Attached Condo Term > 15Y" && (params.legal_structure != "condo")) {

					return;
				}

				//PENDIENTE FILTRAR EL TERM
				if (new_adjustment.type == "Primary Residence <= 15YR" && (params.occupancy != "primary")) {

					return;
				}

				//PENDIENTE FILTRAR EL TERM
				if (new_adjustment.type == "Primary Residence <= 15YR" && (params.legal_structure != "single")) {

					return;
				}

				if (new_adjustment.type == "Subordinate Financing" && (params.sub_financing != "yes")) {

					return;
				}

				if (new_adjustment.type == "Manufactured") {

					if (params.manufactured != "yes") {

						return;
					}
					else {
						has_manufactured = true;
					}

				}

				if (new_adjustment.type == "Streamline" && (params.streamline != "yes")) {

					return;
				}

				//ACTIVADO POR EL MOMENTO

				if (new_adjustment.type == "CA State") {

				}

				if (new_adjustment.type == "0 FICO" && (params.level_fico >= 620)) {

					return;
				}

				if (new_adjustment.type == "HP/HR LI" && (params.limited_income != "yes")) {

					return;
				}

				if (new_adjustment.type == "Interest Only" && (params.interest_only != "yes")) {

					return;
				}

				//OMIT FIXED RATE

				if (new_adjustment.type == "Fixed Rate") {

					return;
				}

				if (new_adjustment.type == "Fixed Rate" && (params.amortization_type != "fixed")) {

					return;
				}

				if (new_adjustment.type == "DPA" && (params.down_payment != "yes")) {

					return;
				}

				if (new_adjustment.type == "Foreign National" && (params.foreign_national != "yes")) {

					return;
				}

				if (new_adjustment.type == "ITIN") {

					has_itin = true

					if (params.itin != "yes") {

						return;
					}

				}

				if (new_adjustment.type == "Lock Period") {

					return;
				}

				if (new_adjustment.type == "Non-Warrantable") {

					return;
				}

				if (new_adjustment.type == "Escrow Waiver" && (params.waive_ecrows != "yes")) {

					return;
				}

				if (new_adjustment.type == "No Escrow Waiver" && (params.waive_ecrows == "yes")) {

					return;
				}

				if (new_adjustment.type == "DTI") {

					let dti_data = adj["adj_value"].split("-")

					if (dti_data.length > 1) {

						new_adjustment.type += " " + adj["adj_value"] 

						let dti_from = parseFloat(dti_data[0])
						let dti_to = parseFloat(dti_data[1])

						if (params.dti_ratio < dti_from || params.dti_ratio > dti_to) {

							return
						}

					}
					else {

						return
					}

				}

				//INACTIVE ADJUSTMENTS

				if (new_adjustment.type == "Manual Underwriting") {

					return;
				}

				if (new_adjustment.type == "IRRRL") {

					return;
				}

				if (new_adjustment.type == "LP 20YR") {

					return;
				}

				if (new_adjustment.type == "LP Findings") {

					return;
				}
				//END 



				let adjustment = adj["ltv0_60"];
				let adjltv = " LTV <60";

				if (ltv > 60) {

					adjustment = adj["ltv60_70"];
					adjltv = " LTV 60-70";
				}

				if (ltv > 70) {

					adjustment = adj["ltv70_75"];
					adjltv = " LTV 70-75";
				}

				if (ltv > 75) {

					adjustment = adj["ltv75_80"];
					adjltv = " LTV 75-80";
				}

				if (ltv > 80) {

					adjustment = adj["ltv80_85"];
					adjltv = " LTV 80-85";
				}

				if (ltv > 85) {

					adjustment = adj["ltv85_90"];
					adjltv = " LTV 85-90";
				}

				if (ltv > 90) {

					adjustment = adj["ltv90_95"];
					adjltv = " LTV 90-95";
				}

				if (ltv > 95) {

					adjustment = adj["ltv95_97"];
					adjltv = " LTV 95-97";
				}

				if (ltv > 97) {

					adjustment = adj["ltv97_more"];
					adjltv = " LTV 97+";
				}

				adjustment = parseFloat(adjustment * -1).toFixed(3);

				new_adjustment.value = adjustment;
				new_adjustment.type += adjltv;

				product.adjustments.push(new_adjustment);

				if (has_hbpurchase) {

					product.adjustments = product.adjustments.filter(function(i) {

						return i.baseType != "Purchase"
					})
				}

				total_adjustments += parseFloat(adjustment);

			});		
	
			

			product.total_adjustments = total_adjustments.toFixed(3);

			

			//END ADJUSTMENTS


			// BEGIN RATE ADJUSTMENTS 


			//RATE ADJUSTMENTS


			product.adjustments_rate.forEach(function(adj, adj_index) {

				let new_adjustment = {
					type: "FICO " + adj["fico_from"] + "-" +  adj["fico_to"],
					value: 0
				}

				let adjustment = adj["ltv0_50"];
				let adjltv = " LTV <50";

				if (ltv > 50) {

					adjustment = adj["ltv50_55"];
					adjltv = " LTV 50-55";
				}

				if (ltv > 55) {

					adjustment = adj["ltv55_60"];
					adjltv = " LTV 55-60";
				}

				if (ltv > 60) {

					adjustment = adj["ltv60_65"];
					adjltv = " LTV 60-65";
				}

				if (ltv > 65) {

					adjustment = adj["ltv65_70"];
					adjltv = " LTV 65-70";
				}

				if (ltv > 70) {

					adjustment = adj["ltv70_75"];
					adjltv = " LTV 70-75";
				}

				if (ltv > 75) {

					adjustment = adj["ltv75_80"];
					adjltv = " LTV 75-80";
				}

				if (ltv > 80) {

					adjustment = adj["ltv80_85"];
					adjltv = " LTV 80-85";
				}

				if (ltv > 85) {

					adjustment = adj["ltv85_more"];
					adjltv = " LTV 85+";
				}

				new_adjustment.value = adjustment;
				new_adjustment.type += adjltv;

				product.rate_adjustments.push(new_adjustment);

				total_rate_adjustments += parseFloat(adjustment);

			});



			//RATE AMT ADJUSTMENTS


			product.adjustments_rate_amounts.forEach(function(adj, adj_index) {

				let new_adjustment = {
					type: "AMOUNT " + adj["amount_from"] + "-" +  adj["amount_to"],
					value: adj["value"]
				}

				product.rate_adjustments.push(new_adjustment);

				total_rate_adjustments += parseFloat(new_adjustment.value);

			});

			//RATE MISC ADJUSTMENTS

			product.adjustments_rate_misc.forEach(function(adj, adj_index) {

				let apply_adjustment = false

				if (adj["type"] == "ITIN") {

					has_itin = true

					if (params.itin == "yes") {

						apply_adjustment = true
					}
				}

				if (adj["type"] == "Streamline" && params.streamline == "yes") {

					apply_adjustment = true
				}

				if (!apply_adjustment) {
					return
				}

				let new_adjustment = {
					type: adj["type"],
					value: 0
				}

				let adjustment = adj["ltv0_50"];
				let adjltv = " LTV <50";

				if (ltv > 50) {

					adjustment = adj["ltv50_55"];
					adjltv = " LTV 50-55";
				}

				if (ltv > 55) {

					adjustment = adj["ltv55_60"];
					adjltv = " LTV 55-60";
				}

				if (ltv > 60) {

					adjustment = ad=["ltv60_65"];
					adjltv = " LTV 60-65";
				}

				if (ltv > 65) {

					adjustment = adj["ltv65_70"];
					adjltv = " LTV 65-70";
				}

				if (ltv > 70) {

					adjustment = adj["ltv70_75"];
					adjltv = " LTV 70-75";
				}

				if (ltv > 75) {

					adjustment = adj["ltv75_80"];
					adjltv = " LTV 75-80";
				}

				if (ltv > 80) {

					adjustment = adj["ltv80_85"];
					adjltv = " LTV 80-85";
				}

				if (ltv > 85) {

					adjustment = adj["ltv85_more"];
					adjltv = " LTV 85+";
				}

				new_adjustment.value = adjustment;
				new_adjustment.type += adjltv;

				product.rate_adjustments.push(new_adjustment);

				total_rate_adjustments += parseFloat(adjustment);

			});

			//CALC COMPENSATION AND FEES

			product.compensation = 0;
			product.total_payment = 0;
			product.closing_cost = 0;
			product.final_number = 0;
			product.apr = 0;

			//SECTION A

			product.borrower_points = 0;
			product.origination_charge = 0;
			product.fee = 0;
			product.fee_points = 0;

			product.origination_total = 0;

			if (product.margins) {


				if (product.margins.active != "yes") {

					return;
				}

				if (product.margins.relationship == "Broker") {

					product.compensation = parseFloat(product.margins.broker_com);
					product.fee = parseFloat(product.margins.lender_fee) + parseFloat(product.margins.processing_fee);
					
				}
				else {

					// product.compensation = parseFloat(product.margins.lender_com);
					product.compensation = parseFloat(product.margins.broker_com);


					product.fee = parseFloat(product.margins.admin_fee);
				}

				let comp_money = (product.compensation * 0.01) * parseFloat(params.loan_amount);

				if (comp_money > parseFloat(product.margins.maximun)) {

					product.compensation = (parseFloat(product.margins.maximun) / parseFloat(params.loan_amount)) * 100
				}


				let org_money = (product.margins.origination * 0.01) * parseFloat(params.loan_amount);

				if (org_money > parseFloat(product.margins.maximun)) {

					product.margins.origination = (parseFloat(product.margins.maximun) / parseFloat(params.loan_amount)) * 100
				}

				if (params.origination_charge == "yes" && params.fees_in != "yes") {

					product.origination_charge = (parseFloat(product.margins.origination) * 0.01) * parseFloat(params.loan_amount);
					product.compensation = 0;
				}

				if (params.fees_in == "yes") {

					
					product.fee_points = (product.fee / parseFloat(params.loan_amount)) * 100;

					//$fee_points = bcdiv(($fee / $loan_amount) * 100, 1, 3);

					product.fee = 0;
				}					
			}

			else {

				return;
			}

			//END


			//BEGIN UPDATE RATES

			let term = parseFloat(params.fixed_term);
			let loan_amount = params.loan_amount;

			product.base_rates.forEach(function(rates, ri) {

				let rate = parseFloat(rates["rate"]);

				rate += total_rate_adjustments

				let anual_rate = (rate / 100) / 12;
				let pi = loan_amount / ((Math.pow(1 + anual_rate, term) - 1) / (anual_rate * Math.pow(1 + anual_rate, term)));


				let new_rate = {};

				new_rate["rate"] = rate;
				new_rate["pi"] = pi;

				locks.forEach(function(l, li) {

					let base_price = parseFloat(rates[l]);
					let lock_price = parseFloat(rates[l]) + parseFloat(total_adjustments) - parseFloat(product.compensation) - parseFloat(product.fee_points);
					let lock_fee = ((lock_price.toFixed(3) - 100) * 0.01) * loan_amount;

					new_rate[l] = {"price": lock_price, "fee": lock_fee, "base_price": base_price};

				});

				new_product.new_rates.push(new_rate);

				
			});

				

			new_product.current_rate = new_product.new_rates[0];

			new_product.new_rates.forEach(function(rate, i) {

				if (rate.rate >= 3) {

					new_product.current_rate = rate;
				}

				if (rate["lock30"].price >= 100 && rate.rate < best_rate) {

					best_rate = rate.rate;
				}
			});

			// app_pricing.calcCost(new_product);

			/* 
			$r2 = ($row_rate["rate"] / 100) / 12;

			pi formula $loan_amount / ((pow(1 + $r2, $mnt) - 1) / ($r2 * pow(1 + $r2, $mnt)));

			(($new_points - 100) * 0.01) * $loan_amount;

			*/
			//END

			//BEGIN INELIGIBLE SCAN


			product.adjustments.forEach(function(adj, i) {

				if (adj.value > 50 || adj.value < -50) {

					new_product.ineligible_reason.push(adj.type);
				}
			});

			// if (product.price_adjustments.length < 1 && (parseFloat(params.fixed_term) > 180 || params.category_type == 2)) {

			// 	new_product.ineligible_reason.push("FICO SCORE");
			// }

			//APPLY THIS ONLY FOR CONVENTIONAL AND FIXED TERM UP TO 15Y

			if (product.price_adjustments.length < 1 && params.loan_purpose == "lp_purchase" && (parseFloat(params.fixed_term) > 180 || params.category_type == 2)) {

				new_product.ineligible_reason.push("Level Fico");
			}

			if (params.sub_financing == "yes" && product.sub_adjustments.length < 1) {

				new_product.ineligible_reason.push("Subordinate Financing");
			}

			if (params.loan_purpose == "lp_cashout" && !has_cashout && !has_cashout2) {

				new_product.ineligible_reason.push("Cashout");
			}

			if (params.itin == "yes" && !has_itin) {

				new_product.ineligible_reason.push("ITIN");
			}

			if (params.occupancy == "second" && !has_second_home) {

				new_product.ineligible_reason.push("2nd Home");
			}
			else if (params.occupancy == "investment" && !has_investment) {

				new_product.ineligible_reason.push("NON-OWNER");
			}
			else if (params.manufactured == "yes" && !has_manufactured) {

				new_product.ineligible_reason.push("Manufactured");
			}
			else if (params.units == "2unit" && !has_2unit) {

				new_product.ineligible_reason.push("2 Units");
			}
			else if (params.units == "3unit" && !has_3unit) {

				new_product.ineligible_reason.push("3 Units");
			}
			else if (params.units == "4unit" && !has_4unit) {

				new_product.ineligible_reason.push("4 Units");
			}
			else if (params.waive_ecrows == "yes" && !has_escrow_waiver) {

				new_product.ineligible_reason.push("Escrow Waiver");
			}

			else if (params.doctor == "yes" && !has_doctor) {

				new_product.ineligible_reason.push("Doctor");
			}

			else if (params.construction == "yes" && !has_construction) {

				new_product.ineligible_reason.push("Construction");
			}
			else if (params.Renovation == "yes" && !has_Renovation) {

				new_product.ineligible_reason.push("Renovation");
			}


			//END

			//ADD PRODUCTO TO THE RESPECTIVE SECTION

			if (new_product.ineligible_reason.length > 0) {

				respuesta.ineligible_products.push(new_product);
			}
			else {

				respuesta.eligible_products.push(new_product);
			}

			//END

		}


		respuesta.best_rate = best_rate

		callback(respuesta)

	})


}

const getBetterProduct = function( products, name, term, property_price, loan_amount) {

	let dow_reate = 100
	let closing_cost = 0
	let origination = 0
	let hazard_insurance = 0
	let real_estate_taxes = 0
	let apr = 0.0
	let pi = 0
	let product_type = ""

	for( let i = 0; i < products.length; i++ )
	{
		for( let j = 0; j < products[i].new_rates.length; j++ )
		{
			if( products[i].new_rates[j].rate < dow_reate && products[i].new_rates[j].lock30.price >= 100.000 )
			{
				dow_reate = products[i].new_rates[j].rate
				pi = products[i].new_rates[j].pi
				product_type = products[i].product_type

				closing_cost = Math.round(( products[i].new_rates[j].lock30.fee * -1 ) + products[i].fee + products[i].origination_charge + 1000 + 1500 + 300 + 1200)
				origination = Math.round(( products[i].new_rates[j].lock30.fee * -1 ) + products[i].fee + products[i].origination_charge)
			}
		}
	}
	
	apr = getAPR( parseFloat( term ), parseFloat( pi ), parseFloat( loan_amount - closing_cost ) )

	hazard_insurance = (parseInt(property_price) * 0.002) / 12
	real_estate_taxes = (parseInt(property_price) * 0.0125) / 12

	let product =
	{
		"name": name,
		"product_type": product_type,
		"rate": `${parseFloat( dow_reate ).toFixed(3)}%`,
		"apr": `${(apr).toFixed(3)}%`,
		"closing_cost": `$${parseFloat(closing_cost).toLocaleString("en-US", {style: "decimal"})}`,
		"mo_payment": `$${parseFloat(pi.toFixed(0)).toLocaleString("en-US", {style: "decimal"})}`,
		"loan_amount": `$${parseFloat(loan_amount).toLocaleString("en-US", {style: "decimal"})}`,
		"cs": [
			{
				"name": "Appraisal Fee",
				"price": "$650.00",
			},
			{
				"name": "Credit Report",
				"price": "$125.00",
			},
			{
				"name": "Doc Prep APR",
				"price": "$225.00"
			},
			{
				"name": "Title",
				"price": "$1135.00"
			},
			{
				"name": "Recording Fee",
				"price": "$330.00"
			},
			{
				"name": "Homeowner",
				"price": "$780.00"
			},
			{
				"name": "Origination",
				"price": `$${parseFloat( origination ).toLocaleString("en-US", {style: "decimal"})}.00`
			},
			{
				"name": "Total",
				"price": `$${(origination + 650 + 125 + 225 + 1135 + 330 + 780).toFixed(2)}`
			}
		],
		"mp": [
			{
				"name": "Principal & Interest",
				"price": `$${pi.toFixed(2)}`
			},
			{
				"name": "Hazard Insurance",
				"price": `$${ hazard_insurance.toFixed(2) }`
			},
			{
				"name": "Real Estate Taxes",
				"price": `$${ real_estate_taxes.toFixed(2) }`
			},
			{
				"name": "Total",
				"price": `$${(pi + hazard_insurance + real_estate_taxes).toFixed(2)}`
			}
		]
	}

	if( dow_reate == 100 ) return null

	return product
}

const getProductRank = function(params_products, callback) {
	let products_table = []
	let property_price = params_products.loan_amount / (params_products.ltv * 0.01)

	findProducts(params_products, response => {
		if( response.eligible_products.length == 0 ) return
		let conventional = getBetterProduct( response.eligible_products.filter(el => el.product_type == 1 || el.product_type == 2 || el.product_type == 12), `CONVENTIONAL ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount )
		let fha = getBetterProduct( response.eligible_products.filter(el => el.product_type == 3), `FHA ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount)
		let ba = getBetterProduct( response.eligible_products.filter(el => el.product_type == 5), `VA ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount )
		let use = getBetterProduct( response.eligible_products.filter(el => el.product_type == 4), `USDA ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount )
		let non_qm = getBetterProduct( response.eligible_products.filter(el => el.product_type == 7), `NON QM ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount )
		let jumbo = getBetterProduct( response.eligible_products.filter(el => el.product_type == 9), `JUMBO ${parseInt(params_products.fixed_term) / 12} ${params_products.amortization_type}`.toUpperCase(), params_products.fixed_term, property_price, params_products.loan_amount )

		if( conventional ) products_table.push(conventional)
		if( fha ) products_table.push(fha)
		if( ba ) products_table.push(ba)
		if( use ) products_table.push(use)
		if( non_qm ) products_table.push(non_qm)
		if( jumbo ) products_table.push(jumbo)

		callback(products_table)
	})
}


module.exports = {
	findProducts, getAPR, createAlert, getProductRank, getBetterProduct
}