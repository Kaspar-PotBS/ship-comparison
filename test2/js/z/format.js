(function () {
        Formatsetting();
    });
	
	function Formatsetting(){
		var x =[];
		var x = document.getElementById("format").value;
		
		if (x == "1")
	{
	var localeselect = 'da-DK';
	}
	else
	
	var localeselect = 'en-us';
	
	
// Ship A
document.getElementById("cargo_capacity_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("cargo_capacity_a_value").value));
document.getElementById("os_visibility_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_visibility_a_value").value));
document.getElementById("os_spotting_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_spotting_a_value").value));
document.getElementById("crew_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_a_value").value));
document.getElementById("target_tracking_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("target_tracking_a_value").value));
document.getElementById("base_durability_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("base_durability_a_value").value));
document.getElementById("insurance_value_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("insurance_value_a_value").value));

document.getElementById("os_best_sailing_point_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_best_sailing_point_a_value").value));
document.getElementById("os_max_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_max_speed_a_value").value));

document.getElementById("os_upwind_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_upwind_speed_a_value").value));
document.getElementById("os_luffing_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_luffing_speed_a_value").value));
document.getElementById("os_close_haul_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_close_haul_speed_a_value").value));
document.getElementById("os_beam_reach_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_beam_reach_speed_a_value").value));
document.getElementById("os_broad_reach_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_broad_reach_speed_a_value").value));
document.getElementById("os_running_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_running_speed_a_value").value));

document.getElementById("battle_best_sailing_point_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_best_sailing_point_a_value").value));
document.getElementById("battle_max_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_max_speed_a_value").value));
document.getElementById("battle_acceleration_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_acceleration_a_value").value));
document.getElementById("battle_deceleration_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_deceleration_a_value").value));
document.getElementById("battle_turning_fast_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_fast_a_value").value));
document.getElementById("battle_turning_slow_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_slow_a_value").value));
document.getElementById("battle_turning_accelerating_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_accelerating_a_value").value));
document.getElementById("battle_turning_decelerating_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_decelerating_a_value").value));

document.getElementById("battle_upwind_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_upwind_speed_a_value").value));
document.getElementById("battle_luffing_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_luffing_speed_a_value").value));
document.getElementById("battle_close_haul_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_close_haul_speed_a_value").value));
document.getElementById("battle_beam_reach_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_beam_reach_speed_a_value").value));
document.getElementById("battle_broad_reach_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_broad_reach_speed_a_value").value));
document.getElementById("battle_running_speed_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_running_speed_a_value").value));

document.getElementById("structure_integrity_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("structure_integrity_a_value").value));
document.getElementById("port_armour_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("port_armour_a_value").value));
document.getElementById("starboard_armour_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("starboard_armour_a_value").value));
document.getElementById("bow_armour_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_armour_a_value").value));
document.getElementById("stern_armour_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_armour_a_value").value));
document.getElementById("mast_integrity_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_integrity_a_value").value));

document.getElementById("structure_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("structure_dr_a_value").value));
document.getElementById("port_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("port_dr_a_value").value));
document.getElementById("starboard_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("starboard_dr_a_value").value));
document.getElementById("bow_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_dr_a_value").value));
document.getElementById("stern_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_dr_a_value").value));
document.getElementById("mast_dr_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_dr_a_value").value));

document.getElementById("mast_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_offence_a_value").value));
document.getElementById("mast_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_defence_a_value").value));
document.getElementById("mast_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_resist_a_value").value));

document.getElementById("crew_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_offence_a_value").value));
document.getElementById("crew_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_defence_a_value").value));
document.getElementById("crew_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_resist_a_value").value));

document.getElementById("bow_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_offence_a_value").value));
document.getElementById("bow_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_defence_a_value").value));
document.getElementById("bow_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_resist_a_value").value));

document.getElementById("stern_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_offence_a_value").value));
document.getElementById("stern_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_defence_a_value").value));
document.getElementById("stern_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_resist_a_value").value));

document.getElementById("sides_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_offence_a_value").value));
document.getElementById("sides_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_defence_a_value").value));
document.getElementById("sides_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_resist_a_value").value));

document.getElementById("grappling_offence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_offence_a_value").value));
document.getElementById("grappling_defence_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_defence_a_value").value));
document.getElementById("grappling_resist_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_resist_a_value").value));

document.getElementById("broadside_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_weight_a_value").value));
document.getElementById("broadside_max_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_max_range_a_value").value));
document.getElementById("broadside_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_max_damage_a_value").value));
document.getElementById("broadside_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_damage_200_a_value").value));
document.getElementById("broadside_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_dps_200_a_value").value));
document.getElementById("broadside_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_damage_400_a_value").value));
document.getElementById("broadside_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_dps_400_a_value").value));

document.getElementById("top_deck_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_weight_a_value").value));
document.getElementById("top_deck_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_range_a_value").value));
document.getElementById("top_deck_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_gun_a_value").value));
document.getElementById("top_deck_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_reload_a_value").value));
document.getElementById("top_deck_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_max_damage_a_value").value));
document.getElementById("top_deck_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_accuracy_200_a_value").value));
document.getElementById("top_deck_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_200_a_value").value));
document.getElementById("top_deck_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_dps_200_a_value").value));
document.getElementById("top_deck_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_accuracy_400_a_value").value));
document.getElementById("top_deck_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_400_a_value").value));
document.getElementById("top_deck_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_dps_400_a_value").value));

document.getElementById("upper_deck_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_weight_a_value").value));
document.getElementById("upper_deck_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_range_a_value").value));
document.getElementById("upper_deck_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_gun_a_value").value));
document.getElementById("upper_deck_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_reload_a_value").value));
document.getElementById("upper_deck_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_max_damage_a_value").value));
document.getElementById("upper_deck_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_accuracy_200_a_value").value));
document.getElementById("upper_deck_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_200_a_value").value));
document.getElementById("upper_deck_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_dps_200_a_value").value));
document.getElementById("upper_deck_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_accuracy_400_a_value").value));
document.getElementById("upper_deck_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_400_a_value").value));
document.getElementById("upper_deck_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_dps_400_a_value").value));

document.getElementById("middle_deck_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_weight_a_value").value));
document.getElementById("middle_deck_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_range_a_value").value));
document.getElementById("middle_deck_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_gun_a_value").value));
document.getElementById("middle_deck_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_reload_a_value").value));
document.getElementById("middle_deck_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_max_damage_a_value").value));
document.getElementById("middle_deck_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_accuracy_200_a_value").value));
document.getElementById("middle_deck_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_200_a_value").value));
document.getElementById("middle_deck_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_dps_200_a_value").value));
document.getElementById("middle_deck_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_accuracy_400_a_value").value));
document.getElementById("middle_deck_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_400_a_value").value));
document.getElementById("middle_deck_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_dps_400_a_value").value));

document.getElementById("gun_deck_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_weight_a_value").value));
document.getElementById("gun_deck_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_range_a_value").value));
document.getElementById("gun_deck_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_gun_a_value").value));
document.getElementById("gun_deck_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_reload_a_value").value));
document.getElementById("gun_deck_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_max_damage_a_value").value));
document.getElementById("gun_deck_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_accuracy_200_a_value").value));
document.getElementById("gun_deck_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_200_a_value").value));
document.getElementById("gun_deck_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_dps_200_a_value").value));
document.getElementById("gun_deck_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_accuracy_400_a_value").value));
document.getElementById("gun_deck_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_400_a_value").value));
document.getElementById("gun_deck_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_dps_400_a_value").value));

document.getElementById("bow_chasers_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_weight_a_value").value));
document.getElementById("bow_chasers_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_range_a_value").value));
document.getElementById("bow_chasers_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_gun_a_value").value));
document.getElementById("bow_chasers_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_reload_a_value").value));
document.getElementById("bow_chasers_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_max_damage_a_value").value));
document.getElementById("bow_chasers_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_accuracy_200_a_value").value));
document.getElementById("bow_chasers_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_200_a_value").value));
document.getElementById("bow_chasers_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_dps_200_a_value").value));
document.getElementById("bow_chasers_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_accuracy_400_a_value").value));
document.getElementById("bow_chasers_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_400_a_value").value));
document.getElementById("bow_chasers_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_dps_400_a_value").value));

document.getElementById("stern_chasers_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_weight_a_value").value));
document.getElementById("stern_chasers_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_range_a_value").value));
document.getElementById("stern_chasers_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_gun_a_value").value));
document.getElementById("stern_chasers_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_reload_a_value").value));
document.getElementById("stern_chasers_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_max_damage_a_value").value));
document.getElementById("stern_chasers_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_accuracy_200_a_value").value));
document.getElementById("stern_chasers_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_200_a_value").value));
document.getElementById("stern_chasers_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_dps_200_a_value").value));
document.getElementById("stern_chasers_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_accuracy_400_a_value").value));
document.getElementById("stern_chasers_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_400_a_value").value));
document.getElementById("stern_chasers_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_dps_400_a_value").value));

document.getElementById("swivel_guns_weight_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_weight_a_value").value));
document.getElementById("swivel_guns_range_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_range_a_value").value));
document.getElementById("swivel_guns_damage_gun_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_damage_gun_a_value").value));
document.getElementById("swivel_guns_reload_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_reload_a_value").value));
document.getElementById("swivel_guns_max_damage_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_max_damage_a_value").value));
document.getElementById("swivel_accuracy_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_accuracy_200_a_value").value));
document.getElementById("swivel_damage_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_damage_200_a_value").value));
document.getElementById("swivel_dps_200_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_dps_200_a_value").value));
document.getElementById("swivel_accuracy_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_accuracy_400_a_value").value));
document.getElementById("swivel_damage_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_damage_400_a_value").value));
document.getElementById("swivel_dps_400_a").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_dps_400_a_value").value));


// Ship B
document.getElementById("cargo_capacity_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("cargo_capacity_b_value").value));
document.getElementById("os_visibility_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_visibility_b_value").value));
document.getElementById("os_spotting_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_spotting_b_value").value));
document.getElementById("crew_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_b_value").value));
document.getElementById("target_tracking_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("target_tracking_b_value").value));
document.getElementById("base_durability_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("base_durability_b_value").value));
document.getElementById("insurance_value_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("insurance_value_b_value").value));

document.getElementById("os_best_sailing_point_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_best_sailing_point_b_value").value));
document.getElementById("os_max_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_max_speed_b_value").value));

document.getElementById("os_upwind_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_upwind_speed_b_value").value));
document.getElementById("os_luffing_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_luffing_speed_b_value").value));
document.getElementById("os_close_haul_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_close_haul_speed_b_value").value));
document.getElementById("os_beam_reach_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_beam_reach_speed_b_value").value));
document.getElementById("os_broad_reach_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_broad_reach_speed_b_value").value));
document.getElementById("os_running_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("os_running_speed_b_value").value));

document.getElementById("battle_best_sailing_point_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_best_sailing_point_b_value").value));
document.getElementById("battle_max_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_max_speed_b_value").value));
document.getElementById("battle_acceleration_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_acceleration_b_value").value));
document.getElementById("battle_deceleration_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_deceleration_b_value").value));
document.getElementById("battle_turning_fast_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_fast_b_value").value));
document.getElementById("battle_turning_slow_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_slow_b_value").value));
document.getElementById("battle_turning_accelerating_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_accelerating_b_value").value));
document.getElementById("battle_turning_decelerating_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_turning_decelerating_b_value").value));

document.getElementById("battle_upwind_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_upwind_speed_b_value").value));
document.getElementById("battle_luffing_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_luffing_speed_b_value").value));
document.getElementById("battle_close_haul_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_close_haul_speed_b_value").value));
document.getElementById("battle_beam_reach_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_beam_reach_speed_b_value").value));
document.getElementById("battle_broad_reach_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_broad_reach_speed_b_value").value));
document.getElementById("battle_running_speed_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("battle_running_speed_b_value").value));

document.getElementById("structure_integrity_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("structure_integrity_b_value").value));
document.getElementById("port_armour_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("port_armour_b_value").value));
document.getElementById("starboard_armour_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("starboard_armour_b_value").value));
document.getElementById("bow_armour_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_armour_b_value").value));
document.getElementById("stern_armour_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_armour_b_value").value));
document.getElementById("mast_integrity_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_integrity_b_value").value));

document.getElementById("structure_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("structure_dr_b_value").value));
document.getElementById("port_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("port_dr_b_value").value));
document.getElementById("starboard_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("starboard_dr_b_value").value));
document.getElementById("bow_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_dr_b_value").value));
document.getElementById("stern_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_dr_b_value").value));
document.getElementById("mast_dr_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_dr_b_value").value));

document.getElementById("mast_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_offence_b_value").value));
document.getElementById("mast_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_defence_b_value").value));
document.getElementById("mast_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("mast_resist_b_value").value));

document.getElementById("crew_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_offence_b_value").value));
document.getElementById("crew_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_defence_b_value").value));
document.getElementById("crew_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("crew_resist_b_value").value));

document.getElementById("bow_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_offence_b_value").value));
document.getElementById("bow_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_defence_b_value").value));
document.getElementById("bow_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_resist_b_value").value));

document.getElementById("stern_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_offence_b_value").value));
document.getElementById("stern_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_defence_b_value").value));
document.getElementById("stern_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_resist_b_value").value));

document.getElementById("sides_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_offence_b_value").value));
document.getElementById("sides_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_defence_b_value").value));
document.getElementById("sides_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("sides_resist_b_value").value));

document.getElementById("grappling_offence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_offence_b_value").value));
document.getElementById("grappling_defence_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_defence_b_value").value));
document.getElementById("grappling_resist_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("grappling_resist_b_value").value));

document.getElementById("broadside_total_guns_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_total_guns_b_value").value));
document.getElementById("broadside_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_weight_b_value").value));
document.getElementById("broadside_max_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_max_range_b_value").value));
document.getElementById("broadside_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_max_damage_b_value").value));
document.getElementById("broadside_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_damage_200_b_value").value));
document.getElementById("broadside_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_dps_200_b_value").value));
document.getElementById("broadside_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_damage_400_b_value").value));
document.getElementById("broadside_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("broadside_dps_400_b_value").value));

document.getElementById("top_deck_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_weight_b_value").value));
document.getElementById("top_deck_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_range_b_value").value));
document.getElementById("top_deck_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_gun_b_value").value));
document.getElementById("top_deck_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_reload_b_value").value));
document.getElementById("top_deck_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_max_damage_b_value").value));
document.getElementById("top_deck_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_accuracy_200_b_value").value));
document.getElementById("top_deck_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_200_b_value").value));
document.getElementById("top_deck_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_dps_200_b_value").value));
document.getElementById("top_deck_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_accuracy_400_b_value").value));
document.getElementById("top_deck_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_damage_400_b_value").value));
document.getElementById("top_deck_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("top_deck_dps_400_b_value").value));

document.getElementById("upper_deck_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_weight_b_value").value));
document.getElementById("upper_deck_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_range_b_value").value));
document.getElementById("upper_deck_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_gun_b_value").value));
document.getElementById("upper_deck_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_reload_b_value").value));
document.getElementById("upper_deck_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_max_damage_b_value").value));
document.getElementById("upper_deck_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_accuracy_200_b_value").value));
document.getElementById("upper_deck_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_200_b_value").value));
document.getElementById("upper_deck_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_dps_200_b_value").value));
document.getElementById("upper_deck_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_accuracy_400_b_value").value));
document.getElementById("upper_deck_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_damage_400_b_value").value));
document.getElementById("upper_deck_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("upper_deck_dps_400_b_value").value));

document.getElementById("middle_deck_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_weight_b_value").value));
document.getElementById("middle_deck_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_range_b_value").value));
document.getElementById("middle_deck_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_gun_b_value").value));
document.getElementById("middle_deck_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_reload_b_value").value));
document.getElementById("middle_deck_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_max_damage_b_value").value));
document.getElementById("middle_deck_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_accuracy_200_b_value").value));
document.getElementById("middle_deck_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_200_b_value").value));
document.getElementById("middle_deck_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_dps_200_b_value").value));
document.getElementById("middle_deck_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_accuracy_400_b_value").value));
document.getElementById("middle_deck_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_damage_400_b_value").value));
document.getElementById("middle_deck_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("middle_deck_dps_400_b_value").value));

document.getElementById("gun_deck_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_weight_b_value").value));
document.getElementById("gun_deck_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_range_b_value").value));
document.getElementById("gun_deck_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_gun_b_value").value));
document.getElementById("gun_deck_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_reload_b_value").value));
document.getElementById("gun_deck_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_max_damage_b_value").value));
document.getElementById("gun_deck_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_accuracy_200_b_value").value));
document.getElementById("gun_deck_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_200_b_value").value));
document.getElementById("gun_deck_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_dps_200_b_value").value));
document.getElementById("gun_deck_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_accuracy_400_b_value").value));
document.getElementById("gun_deck_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_damage_400_b_value").value));
document.getElementById("gun_deck_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("gun_deck_dps_400_b_value").value));

document.getElementById("bow_chasers_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_weight_b_value").value));
document.getElementById("bow_chasers_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_range_b_value").value));
document.getElementById("bow_chasers_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_gun_b_value").value));
document.getElementById("bow_chasers_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_reload_b_value").value));
document.getElementById("bow_chasers_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_max_damage_b_value").value));
document.getElementById("bow_chasers_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_accuracy_200_b_value").value));
document.getElementById("bow_chasers_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_200_b_value").value));
document.getElementById("bow_chasers_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_dps_200_b_value").value));
document.getElementById("bow_chasers_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_accuracy_400_b_value").value));
document.getElementById("bow_chasers_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_damage_400_b_value").value));
document.getElementById("bow_chasers_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("bow_chasers_dps_400_b_value").value));

document.getElementById("stern_chasers_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_weight_b_value").value));
document.getElementById("stern_chasers_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_range_b_value").value));
document.getElementById("stern_chasers_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_gun_b_value").value));
document.getElementById("stern_chasers_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_reload_b_value").value));
document.getElementById("stern_chasers_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_max_damage_b_value").value));
document.getElementById("stern_chasers_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_accuracy_200_b_value").value));
document.getElementById("stern_chasers_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_200_b_value").value));
document.getElementById("stern_chasers_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_dps_200_b_value").value));
document.getElementById("stern_chasers_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_accuracy_400_b_value").value));
document.getElementById("stern_chasers_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_damage_400_b_value").value));
document.getElementById("stern_chasers_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("stern_chasers_dps_400_b_value").value));

document.getElementById("swivel_guns_weight_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_weight_b_value").value));
document.getElementById("swivel_guns_range_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_range_b_value").value));
document.getElementById("swivel_guns_damage_gun_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_damage_gun_b_value").value));
document.getElementById("swivel_guns_reload_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_reload_b_value").value));
document.getElementById("swivel_guns_max_damage_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_guns_max_damage_b_value").value));
document.getElementById("swivel_accuracy_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_accuracy_200_b_value").value));
document.getElementById("swivel_damage_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_damage_200_b_value").value));
document.getElementById("swivel_dps_200_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_dps_200_b_value").value));
document.getElementById("swivel_accuracy_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_accuracy_400_b_value").value));
document.getElementById("swivel_damage_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_damage_400_b_value").value));
document.getElementById("swivel_dps_400_b").innerHTML =(new Intl.NumberFormat(localeselect).format(document.getElementById("swivel_dps_400_b_value").value));


};