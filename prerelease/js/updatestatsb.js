(function () {
		StatsLookupB();
		
		
    });
	
	function StatsLookupB(ShipID){
		var x =[];
		var x = document.getElementById("format").value;
		
		if (x == "1")
	{
	var localeselect = 'da-DK';
	}
	else
	
	var localeselect = 'en-us';
		  
	  
		$.getJSON("https://kaspar-potbs.github.io/ship-comparison/shipdata.json", function(json) {



//Comparison hidden values
document.getElementById("model_b_value").value = ( json.Ships[ ShipID ].model );
document.getElementById("level_b_value").value = ( json.Ships[ ShipID ].level );
document.getElementById("type_b_value").value = ( json.Ships[ ShipID ].type );
document.getElementById("variant_b_value").value = ( json.Ships[ ShipID ].variant );
document.getElementById("size_b_value").value = ( json.Ships[ ShipID ].size );
document.getElementById("classes_b_value").value = ( json.Ships[ ShipID ].classes );


document.getElementById("cargo_capacity_b_value").value = ( json.Ships[ ShipID ].cargo_capacity );
document.getElementById("os_visibility_b_value").value = ( json.Ships[ ShipID ].os_visibility );
document.getElementById("os_spotting_b_value").value = ( json.Ships[ ShipID ].os_spotting );
document.getElementById("crew_b_value").value = ( json.Ships[ ShipID ].crew );
document.getElementById("target_tracking_b_value").value = ( json.Ships[ ShipID ].target_tracking );
document.getElementById("base_durability_b_value").value = ( json.Ships[ ShipID ].base_durability );
document.getElementById("insurance_value_b_value").value = ( json.Ships[ ShipID ].insurance_value );


document.getElementById("os_best_sailing_point_b_value").value = ( json.Ships[ ShipID ].os_best_sailing_point );
document.getElementById("os_max_speed_b_value").value = ( json.Ships[ ShipID ].os_max_speed );

document.getElementById("os_upwind_speed_b_value").value = ( json.Ships[ ShipID ].os_upwind_speed );
document.getElementById("os_luffing_speed_b_value").value = ( json.Ships[ ShipID ].os_luffing_speed );
document.getElementById("os_close_haul_speed_b_value").value = ( json.Ships[ ShipID ].os_close_haul_speed );
document.getElementById("os_beam_reach_speed_b_value").value = ( json.Ships[ ShipID ].os_beam_reach_speed );
document.getElementById("os_broad_reach_speed_b_value").value = ( json.Ships[ ShipID ].os_broad_reach_speed );
document.getElementById("os_running_speed_b_value").value = ( json.Ships[ ShipID ].os_running_speed );


document.getElementById("battle_best_sailing_point_b_value").value = ( json.Ships[ ShipID ].battle_best_sailing_point );
document.getElementById("battle_max_speed_b_value").value = ( json.Ships[ ShipID ].battle_max_speed );
document.getElementById("battle_acceleration_b_value").value = ( json.Ships[ ShipID ].battle_acceleration );
document.getElementById("battle_deceleration_b_value").value = ( json.Ships[ ShipID ].battle_deceleration );
document.getElementById("battle_turning_fast_b_value").value = ( json.Ships[ ShipID ].battle_turning_fast );
document.getElementById("battle_turning_slow_b_value").value = ( json.Ships[ ShipID ].battle_turning_slow );
document.getElementById("battle_turning_accelerating_b_value").value = ( json.Ships[ ShipID ].battle_turning_accelerating );
document.getElementById("battle_turning_decelerating_b_value").value = ( json.Ships[ ShipID ].battle_turning_decelerating );

document.getElementById("battle_upwind_speed_b_value").value = ( json.Ships[ ShipID ].battle_upwind_speed );
document.getElementById("battle_luffing_speed_b_value").value = ( json.Ships[ ShipID ].battle_luffing_speed );
document.getElementById("battle_close_haul_speed_b_value").value = ( json.Ships[ ShipID ].battle_close_haul_speed );
document.getElementById("battle_beam_reach_speed_b_value").value = ( json.Ships[ ShipID ].battle_beam_reach_speed );
document.getElementById("battle_broad_reach_speed_b_value").value = ( json.Ships[ ShipID ].battle_broad_reach_speed );
document.getElementById("battle_running_speed_b_value").value = ( json.Ships[ ShipID ].battle_running_speed );


document.getElementById("structure_integrity_b_value").value = ( json.Ships[ ShipID ].structure_integrity );
document.getElementById("port_armour_b_value").value = ( json.Ships[ ShipID ].port_armour );
document.getElementById("starboard_armour_b_value").value = ( json.Ships[ ShipID ].starboard_armour );
document.getElementById("bow_armour_b_value").value = ( json.Ships[ ShipID ].bow_armour );
document.getElementById("stern_armour_b_value").value = ( json.Ships[ ShipID ].stern_armour );
document.getElementById("mast_integrity_b_value").value = ( json.Ships[ ShipID ].mast_integrity );

document.getElementById("structure_dr_b_value").value = ( json.Ships[ ShipID ].structure_dr );
document.getElementById("port_dr_b_value").value = ( json.Ships[ ShipID ].port_dr );
document.getElementById("starboard_dr_b_value").value = ( json.Ships[ ShipID ].starboard_dr );
document.getElementById("bow_dr_b_value").value = ( json.Ships[ ShipID ].bow_dr );
document.getElementById("stern_dr_b_value").value = ( json.Ships[ ShipID ].stern_dr );
document.getElementById("mast_dr_b_value").value = ( json.Ships[ ShipID ].mast_dr );


document.getElementById("mast_offence_b_value").value = ( json.Ships[ ShipID ].mast_offence );
document.getElementById("mast_defence_b_value").value = ( json.Ships[ ShipID ].mast_defence );
document.getElementById("mast_resist_b_value").value = ( json.Ships[ ShipID ].mast_resist );

document.getElementById("crew_offence_b_value").value = ( json.Ships[ ShipID ].crew_offence );
document.getElementById("crew_defence_b_value").value = ( json.Ships[ ShipID ].crew_defence );
document.getElementById("crew_resist_b_value").value = ( json.Ships[ ShipID ].crew_resist );

document.getElementById("bow_offence_b_value").value = ( json.Ships[ ShipID ].bow_offence );
document.getElementById("bow_defence_b_value").value = ( json.Ships[ ShipID ].bow_defence );
document.getElementById("bow_resist_b_value").value = ( json.Ships[ ShipID ].bow_resist );

document.getElementById("stern_offence_b_value").value = ( json.Ships[ ShipID ].stern_offence );
document.getElementById("stern_defence_b_value").value = ( json.Ships[ ShipID ].stern_defence );
document.getElementById("stern_resist_b_value").value = ( json.Ships[ ShipID ].stern_resist );

document.getElementById("sides_offence_b_value").value = ( json.Ships[ ShipID ].sides_offence );
document.getElementById("sides_defence_b_value").value = ( json.Ships[ ShipID ].sides_defence );
document.getElementById("sides_resist_b_value").value = ( json.Ships[ ShipID ].sides_resist );

document.getElementById("grappling_offence_b_value").value = ( json.Ships[ ShipID ].grappling_offence );
document.getElementById("grappling_defence_b_value").value = ( json.Ships[ ShipID ].grappling_defence );
document.getElementById("grappling_resist_b_value").value = ( json.Ships[ ShipID ].grappling_resist );


document.getElementById("broadside_total_guns_b_value").value = ( json.Ships[ ShipID ].broadside_total_guns );
document.getElementById("broadside_weight_b_value").value = ( json.Ships[ ShipID ].broadside_weight );
document.getElementById("broadside_max_range_b_value").value = ( json.Ships[ ShipID ].broadside_max_range );
document.getElementById("broadside_max_damage_b_value").value = ( json.Ships[ ShipID ].broadside_max_damage );
document.getElementById("broadside_damage_200_b_value").value = ( json.Ships[ ShipID ].broadside_damage_200 );
document.getElementById("broadside_dps_200_b_value").value = ( json.Ships[ ShipID ].broadside_dps_200 );
document.getElementById("broadside_damage_400_b_value").value = ( json.Ships[ ShipID ].broadside_damage_400 );
document.getElementById("broadside_dps_400_b_value").value = ( json.Ships[ ShipID ].broadside_dps_400 );


document.getElementById("top_deck_guns_per_side_b_value").value = ( json.Ships[ ShipID ].top_deck_guns_per_side );
document.getElementById("top_deck_weight_b_value").value = ( json.Ships[ ShipID ].top_deck_weight );
document.getElementById("top_deck_range_b_value").value = ( json.Ships[ ShipID ].top_deck_range );
document.getElementById("top_deck_damage_gun_b_value").value = ( json.Ships[ ShipID ].top_deck_damage_gun );
document.getElementById("top_deck_reload_b_value").value = ( json.Ships[ ShipID ].top_deck_reload );
document.getElementById("top_deck_max_damage_b_value").value = ( json.Ships[ ShipID ].top_deck_max_damage );
document.getElementById("top_deck_accuracy_200_b_value").value = ( json.Ships[ ShipID ].top_deck_accuracy_200 );
document.getElementById("top_deck_damage_200_b_value").value = ( json.Ships[ ShipID ].top_deck_damage_200 );
document.getElementById("top_deck_dps_200_b_value").value = ( json.Ships[ ShipID ].top_deck_dps_200 );
document.getElementById("top_deck_accuracy_400_b_value").value = ( json.Ships[ ShipID ].top_deck_accuracy_400 );
document.getElementById("top_deck_damage_400_b_value").value = ( json.Ships[ ShipID ].top_deck_damage_400 );
document.getElementById("top_deck_dps_400_b_value").value = ( json.Ships[ ShipID ].top_deck_dps_400 );


document.getElementById("upper_deck_guns_per_side_b_value").value = ( json.Ships[ ShipID ].upper_deck_guns_per_side );
document.getElementById("upper_deck_weight_b_value").value = ( json.Ships[ ShipID ].upper_deck_weight );
document.getElementById("upper_deck_range_b_value").value = ( json.Ships[ ShipID ].upper_deck_range );
document.getElementById("upper_deck_damage_gun_b_value").value = ( json.Ships[ ShipID ].upper_deck_damage_gun );
document.getElementById("upper_deck_reload_b_value").value = ( json.Ships[ ShipID ].upper_deck_reload );
document.getElementById("upper_deck_max_damage_b_value").value = ( json.Ships[ ShipID ].upper_deck_max_damage );
document.getElementById("upper_deck_accuracy_200_b_value").value = ( json.Ships[ ShipID ].upper_deck_accuracy_200 );
document.getElementById("upper_deck_damage_200_b_value").value = ( json.Ships[ ShipID ].upper_deck_damage_200 );
document.getElementById("upper_deck_dps_200_b_value").value = ( json.Ships[ ShipID ].upper_deck_dps_200 );
document.getElementById("upper_deck_accuracy_400_b_value").value = ( json.Ships[ ShipID ].upper_deck_accuracy_400 );
document.getElementById("upper_deck_damage_400_b_value").value = ( json.Ships[ ShipID ].upper_deck_damage_400 );
document.getElementById("upper_deck_dps_400_b_value").value = ( json.Ships[ ShipID ].upper_deck_dps_400 );


document.getElementById("middle_deck_guns_per_side_b_value").value = ( json.Ships[ ShipID ].middle_deck_guns_per_side );
document.getElementById("middle_deck_weight_b_value").value = ( json.Ships[ ShipID ].middle_deck_weight );
document.getElementById("middle_deck_range_b_value").value = ( json.Ships[ ShipID ].middle_deck_range );
document.getElementById("middle_deck_damage_gun_b_value").value = ( json.Ships[ ShipID ].middle_deck_damage_gun );
document.getElementById("middle_deck_reload_b_value").value = ( json.Ships[ ShipID ].middle_deck_reload );
document.getElementById("middle_deck_max_damage_b_value").value = ( json.Ships[ ShipID ].middle_deck_max_damage );
document.getElementById("middle_deck_accuracy_200_b_value").value = ( json.Ships[ ShipID ].middle_deck_accuracy_200 );
document.getElementById("middle_deck_damage_200_b_value").value = ( json.Ships[ ShipID ].middle_deck_damage_200 );
document.getElementById("middle_deck_dps_200_b_value").value = ( json.Ships[ ShipID ].middle_deck_dps_200 );
document.getElementById("middle_deck_accuracy_400_b_value").value = ( json.Ships[ ShipID ].middle_deck_accuracy_400 );
document.getElementById("middle_deck_damage_400_b_value").value = ( json.Ships[ ShipID ].middle_deck_damage_400 );
document.getElementById("middle_deck_dps_400_b_value").value = ( json.Ships[ ShipID ].middle_deck_dps_400 );


document.getElementById("gun_deck_guns_per_side_b_value").value = ( json.Ships[ ShipID ].gun_deck_guns_per_side );
document.getElementById("gun_deck_weight_b_value").value = ( json.Ships[ ShipID ].gun_deck_weight );
document.getElementById("gun_deck_range_b_value").value = ( json.Ships[ ShipID ].gun_deck_range );
document.getElementById("gun_deck_damage_gun_b_value").value = ( json.Ships[ ShipID ].gun_deck_damage_gun );
document.getElementById("gun_deck_reload_b_value").value = ( json.Ships[ ShipID ].gun_deck_reload );
document.getElementById("gun_deck_max_damage_b_value").value = ( json.Ships[ ShipID ].gun_deck_max_damage );
document.getElementById("gun_deck_accuracy_200_b_value").value = ( json.Ships[ ShipID ].gun_deck_accuracy_200 );
document.getElementById("gun_deck_damage_200_b_value").value = ( json.Ships[ ShipID ].gun_deck_damage_200 );
document.getElementById("gun_deck_dps_200_b_value").value = ( json.Ships[ ShipID ].gun_deck_dps_200 );
document.getElementById("gun_deck_accuracy_400_b_value").value = ( json.Ships[ ShipID ].gun_deck_accuracy_400 );
document.getElementById("gun_deck_damage_400_b_value").value = ( json.Ships[ ShipID ].gun_deck_damage_400 );
document.getElementById("gun_deck_dps_400_b_value").value = ( json.Ships[ ShipID ].gun_deck_dps_400 );


document.getElementById("bow_chasers_guns_per_side_b_value").value = ( json.Ships[ ShipID ].bow_chasers_guns_per_side );
document.getElementById("bow_chasers_weight_b_value").value = ( json.Ships[ ShipID ].bow_chasers_weight );
document.getElementById("bow_chasers_range_b_value").value = ( json.Ships[ ShipID ].bow_chasers_range );
document.getElementById("bow_chasers_damage_gun_b_value").value = ( json.Ships[ ShipID ].bow_chasers_damage_gun );
document.getElementById("bow_chasers_reload_b_value").value = ( json.Ships[ ShipID ].bow_chasers_reload );
document.getElementById("bow_chasers_max_damage_b_value").value = ( json.Ships[ ShipID ].bow_chasers_max_damage );
document.getElementById("bow_chasers_accuracy_200_b_value").value = ( json.Ships[ ShipID ].bow_chasers_accuracy_200 );
document.getElementById("bow_chasers_damage_200_b_value").value = ( json.Ships[ ShipID ].bow_chasers_damage_200 );
document.getElementById("bow_chasers_dps_200_b_value").value = ( json.Ships[ ShipID ].bow_chasers_dps_200 );
document.getElementById("bow_chasers_accuracy_400_b_value").value = ( json.Ships[ ShipID ].bow_chasers_accuracy_400 );
document.getElementById("bow_chasers_damage_400_b_value").value = ( json.Ships[ ShipID ].bow_chasers_damage_400 );
document.getElementById("bow_chasers_dps_400_b_value").value = ( json.Ships[ ShipID ].bow_chasers_dps_400 );


document.getElementById("stern_chasers_guns_per_side_b_value").value = ( json.Ships[ ShipID ].stern_chasers_guns_per_side );
document.getElementById("stern_chasers_weight_b_value").value = ( json.Ships[ ShipID ].stern_chasers_weight );
document.getElementById("stern_chasers_range_b_value").value = ( json.Ships[ ShipID ].stern_chasers_range );
document.getElementById("stern_chasers_damage_gun_b_value").value = ( json.Ships[ ShipID ].stern_chasers_damage_gun );
document.getElementById("stern_chasers_reload_b_value").value = ( json.Ships[ ShipID ].stern_chasers_reload );
document.getElementById("stern_chasers_max_damage_b_value").value = ( json.Ships[ ShipID ].stern_chasers_max_damage );
document.getElementById("stern_chasers_accuracy_200_b_value").value = ( json.Ships[ ShipID ].stern_chasers_accuracy_200 );
document.getElementById("stern_chasers_damage_200_b_value").value = ( json.Ships[ ShipID ].stern_chasers_damage_200 );
document.getElementById("stern_chasers_dps_200_b_value").value = ( json.Ships[ ShipID ].stern_chasers_dps_200 );
document.getElementById("stern_chasers_accuracy_400_b_value").value = ( json.Ships[ ShipID ].stern_chasers_accuracy_400 );
document.getElementById("stern_chasers_damage_400_b_value").value = ( json.Ships[ ShipID ].stern_chasers_damage_400 );
document.getElementById("stern_chasers_dps_400_b_value").value = ( json.Ships[ ShipID ].stern_chasers_dps_400 );


document.getElementById("swivel_guns_guns_per_side_b_value").value = ( json.Ships[ ShipID ].swivel_guns_guns_per_side );
document.getElementById("swivel_guns_weight_b_value").value = ( json.Ships[ ShipID ].swivel_guns_weight );
document.getElementById("swivel_guns_range_b_value").value = ( json.Ships[ ShipID ].swivel_guns_range );
document.getElementById("swivel_guns_damage_gun_b_value").value = ( json.Ships[ ShipID ].swivel_guns_damage_gun );
document.getElementById("swivel_guns_reload_b_value").value = ( json.Ships[ ShipID ].swivel_guns_reload );
document.getElementById("swivel_guns_max_damage_b_value").value = ( json.Ships[ ShipID ].swivel_guns_max_damage );
document.getElementById("swivel_accuracy_200_b_value").value = ( json.Ships[ ShipID ].swivel_accuracy_200 );
document.getElementById("swivel_damage_200_b_value").value = ( json.Ships[ ShipID ].swivel_damage_200 );
document.getElementById("swivel_dps_200_b_value").value = ( json.Ships[ ShipID ].swivel_dps_200 );
document.getElementById("swivel_accuracy_400_b_value").value = ( json.Ships[ ShipID ].swivel_accuracy_400 );
document.getElementById("swivel_damage_400_b_value").value = ( json.Ships[ ShipID ].swivel_damage_400 );
document.getElementById("swivel_dps_400_b_value").value = ( json.Ships[ ShipID ].swivel_dps_400 );

document.getElementById("last_updated_b_value").value = ( json.Ships[ ShipID ].last_updated );



// Formatted visible values
// Ships Basics		
	document.getElementById("model_b_header").innerHTML = ( json.Ships[ ShipID ].model );
	document.getElementById("model_b").innerHTML = ( json.Ships[ ShipID ].model );
	document.getElementById("level_b").innerHTML = ( json.Ships[ ShipID ].level );
	document.getElementById("type_b").innerHTML = ( json.Ships[ ShipID ].type );
	document.getElementById("variant_b").innerHTML = ( json.Ships[ ShipID ].variant );
	document.getElementById("size_b").innerHTML = ( json.Ships[ ShipID ].size );
	document.getElementById("classes_b").innerHTML = ( json.Ships[ ShipID ].classes );

// General Information
	document.getElementById("cargo_capacity_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].cargo_capacity )));
	document.getElementById("os_visibility_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_visibility )));
	document.getElementById("os_spotting_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_spotting )));
	document.getElementById("crew_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].crew )));
	document.getElementById("target_tracking_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].target_tracking )));
	document.getElementById("base_durability_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].base_durability )));	
	document.getElementById("insurance_value_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].insurance_value )));

// Open Sea
	document.getElementById("os_best_sailing_point_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_best_sailing_point )));
	document.getElementById("os_max_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_max_speed )));
	document.getElementById("os_upwind_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_upwind_speed )));
	document.getElementById("os_luffing_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_luffing_speed )));
	document.getElementById("os_close_haul_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_close_haul_speed )));
	document.getElementById("os_beam_reach_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_beam_reach_speed )));
	document.getElementById("os_broad_reach_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_broad_reach_speed )));
	document.getElementById("os_running_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].os_running_speed )));

// Battle
	document.getElementById("battle_best_sailing_point_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_best_sailing_point )));
	document.getElementById("battle_max_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_max_speed )));
	document.getElementById("battle_acceleration_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_acceleration )));
	document.getElementById("battle_deceleration_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_deceleration )));
	document.getElementById("battle_turning_fast_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_turning_fast )));
	document.getElementById("battle_turning_slow_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_turning_slow )));
	document.getElementById("battle_turning_accelerating_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_turning_accelerating )));
	document.getElementById("battle_turning_decelerating_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_turning_decelerating )));
	document.getElementById("battle_upwind_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_upwind_speed )));
	document.getElementById("battle_luffing_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_luffing_speed )));
	document.getElementById("battle_close_haul_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_close_haul_speed )));
	document.getElementById("battle_beam_reach_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_beam_reach_speed )));
	document.getElementById("battle_broad_reach_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_broad_reach_speed )));
	document.getElementById("battle_running_speed_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].battle_running_speed )));

// Armout and Damage Resist
	document.getElementById("structure_integrity_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].structure_integrity )));
	document.getElementById("port_armour_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].port_armour )));
	document.getElementById("starboard_armour_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].starboard_armour )));
	document.getElementById("bow_armour_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_armour )));
	document.getElementById("stern_armour_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_armour )));
	document.getElementById("mast_integrity_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].mast_integrity )));
	document.getElementById("structure_dr_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].structure_dr )));
	document.getElementById("port_dr_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].port_dr )));
	document.getElementById("starboard_dr_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].starboard_dr )));
	document.getElementById("bow_dr_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_dr )));
	document.getElementById("stern_dr_b").innerHTML = ((new Intl.NumberFormat(localeselect).format( json.Ships[ ShipID ].stern_dr )));
	document.getElementById("mast_dr_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].mast_dr )));

// Offence / Defence / Resistance
	document.getElementById("mast_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].mast_offence )));
	document.getElementById("mast_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].mast_defence )));
	document.getElementById("mast_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].mast_resist )));
	document.getElementById("crew_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].crew_offence )));
	document.getElementById("crew_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].crew_defence )));
	document.getElementById("crew_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].crew_resist )));
	document.getElementById("bow_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_offence )));
	document.getElementById("bow_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_defence )));
	document.getElementById("bow_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_resist )));
	document.getElementById("stern_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_offence )));
	document.getElementById("stern_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_defence )));
	document.getElementById("stern_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_resist )));
	document.getElementById("sides_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].sides_offence )));
	document.getElementById("sides_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].sides_defence )));
	document.getElementById("sides_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].sides_resist )));
	document.getElementById("grappling_offence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].grappling_offence )));
	document.getElementById("grappling_defence_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].grappling_defence )));
	document.getElementById("grappling_resist_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].grappling_resist )));

// Broadside
	document.getElementById("broadside_total_guns_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_total_guns )));
	document.getElementById("broadside_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_weight )));
	document.getElementById("broadside_max_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_max_range )));
	document.getElementById("broadside_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_max_damage )));
	document.getElementById("broadside_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_damage_200 )));
	document.getElementById("broadside_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_dps_200 )));
	document.getElementById("broadside_damage_400_b").innerHTML = ( json.Ships[ ShipID ].broadside_damage_400 );
	document.getElementById("broadside_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].broadside_dps_400 )));

// Top Deck
	document.getElementById("top_deck_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].top_deck_guns_per_side );
	document.getElementById("top_deck_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_weight )));
	document.getElementById("top_deck_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_range )));
	document.getElementById("top_deck_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_damage_gun )));
	document.getElementById("top_deck_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_reload )));
	document.getElementById("top_deck_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_max_damage )));
	document.getElementById("top_deck_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_accuracy_200 )));
	document.getElementById("top_deck_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_damage_200 )));
	document.getElementById("top_deck_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_dps_200 )));
	document.getElementById("top_deck_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_accuracy_400 )));
	document.getElementById("top_deck_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_damage_400 )));
	document.getElementById("top_deck_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].top_deck_dps_400 )));

// Upper Deck
	document.getElementById("upper_deck_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].upper_deck_guns_per_side );
	document.getElementById("upper_deck_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_weight )));
	document.getElementById("upper_deck_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_range )));
	document.getElementById("upper_deck_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_damage_gun )));
	document.getElementById("upper_deck_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_reload )));
	document.getElementById("upper_deck_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_max_damage )));
	document.getElementById("upper_deck_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_accuracy_200 )));
	document.getElementById("upper_deck_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_damage_200 )));
	document.getElementById("upper_deck_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_dps_200 )));
	document.getElementById("upper_deck_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_accuracy_400 )));
	document.getElementById("upper_deck_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_damage_400 )));
	document.getElementById("upper_deck_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].upper_deck_dps_400 )));

// Middle Deck
	document.getElementById("middle_deck_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].middle_deck_guns_per_side );
	document.getElementById("middle_deck_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_weight )));
	document.getElementById("middle_deck_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_range )));
	document.getElementById("middle_deck_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_damage_gun )));
	document.getElementById("middle_deck_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_reload )));
	document.getElementById("middle_deck_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_max_damage )));
	document.getElementById("middle_deck_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_accuracy_200 )));
	document.getElementById("middle_deck_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_damage_200 )));
	document.getElementById("middle_deck_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_dps_200 )));
	document.getElementById("middle_deck_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_accuracy_400 )));
	document.getElementById("middle_deck_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_damage_400 )));
	document.getElementById("middle_deck_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].middle_deck_dps_400 )));

// Gun Deck
	document.getElementById("gun_deck_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].gun_deck_guns_per_side );
	document.getElementById("gun_deck_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_weight )));
	document.getElementById("gun_deck_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_range )));
	document.getElementById("gun_deck_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_damage_gun )));
	document.getElementById("gun_deck_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_reload )));
	document.getElementById("gun_deck_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_max_damage )));
	document.getElementById("gun_deck_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_accuracy_200 )));
	document.getElementById("gun_deck_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_damage_200 )));
	document.getElementById("gun_deck_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_dps_200 )));
	document.getElementById("gun_deck_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_accuracy_400 )));
	document.getElementById("gun_deck_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_damage_400 )));
	document.getElementById("gun_deck_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].gun_deck_dps_400 )));

// Bow Chasers
	document.getElementById("bow_chasers_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].bow_chasers_guns_per_side );
	document.getElementById("bow_chasers_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_weight )));
	document.getElementById("bow_chasers_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_range )));
	document.getElementById("bow_chasers_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_damage_gun )));
	document.getElementById("bow_chasers_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_reload )));
	document.getElementById("bow_chasers_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_max_damage )));
	document.getElementById("bow_chasers_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_accuracy_200 )));
	document.getElementById("bow_chasers_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_damage_200 )));
	document.getElementById("bow_chasers_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_dps_200 )));
	document.getElementById("bow_chasers_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_accuracy_400 )));
	document.getElementById("bow_chasers_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_damage_400 )));
	document.getElementById("bow_chasers_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].bow_chasers_dps_400 )));

//Stern Chasers
	document.getElementById("stern_chasers_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].stern_chasers_guns_per_side );
	document.getElementById("stern_chasers_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_weight )));
	document.getElementById("stern_chasers_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_range )));
	document.getElementById("stern_chasers_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_damage_gun )));
	document.getElementById("stern_chasers_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_reload )));
	document.getElementById("stern_chasers_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_max_damage )));
	document.getElementById("stern_chasers_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_accuracy_200 )));
	document.getElementById("stern_chasers_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_damage_200 )));
	document.getElementById("stern_chasers_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_dps_200 )));
	document.getElementById("stern_chasers_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_accuracy_400 )));
	document.getElementById("stern_chasers_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_damage_400 )));
	document.getElementById("stern_chasers_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].stern_chasers_dps_400 )));

// Swivel Guns
	document.getElementById("swivel_guns_guns_per_side_b").innerHTML = ( json.Ships[ ShipID ].swivel_guns_guns_per_side );
	document.getElementById("swivel_guns_weight_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_guns_weight )));
	document.getElementById("swivel_guns_range_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_guns_range )));
	document.getElementById("swivel_guns_damage_gun_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_guns_damage_gun )));
	document.getElementById("swivel_guns_reload_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_guns_reload )));
	document.getElementById("swivel_guns_max_damage_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_guns_max_damage )));
	document.getElementById("swivel_accuracy_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_accuracy_200 )));
	document.getElementById("swivel_damage_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_damage_200 )));
	document.getElementById("swivel_dps_200_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_dps_200 )));
	document.getElementById("swivel_accuracy_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_accuracy_400 )));
	document.getElementById("swivel_damage_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_damage_400 )));
	document.getElementById("swivel_dps_400_b").innerHTML = (new Intl.NumberFormat(localeselect).format(( json.Ships[ ShipID ].swivel_dps_400 )));

	document.getElementById("last_updated_b").innerHTML = ( json.Ships[ ShipID ].last_updated );

		
		highlight();
		

});

};


		

