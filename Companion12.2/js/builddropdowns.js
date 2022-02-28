function BuildDropdowns(){
	
	//remove present selects

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
      selectElement.remove(i);
   }
}

removeOptions(document.getElementById('ship'));
removeOptions(document.getElementById('shipb'));


shipselect = document.getElementById('ship');
ship1select = document.getElementById('shipb');
shipselect.options[shipselect.options.length] = new Option('-- n/a --', '9999999');
ship1select.options[ship1select.options.length] = new Option('-- n/a --', '9999999');
	
	
$.getJSON("js/shipdata.json", function(json) {
	  
	  var DatasetValue = [];
	  var DatasetValue = document.getElementById("dataset").value;
	  
	  if (DatasetValue == "0")
	{
	var shipdata = json.Legacy;
	}
	else
	var shipdata = json.Ships;
	  
		
	//var shipdata =  json.Ships;
	
	shipdata.sort(function(a, b) {
  var modelA = a.model.toUpperCase(); // ignore upper and lowercase
  var modelB = b.model.toUpperCase(); // ignore upper and lowercase
  if (modelA < modelB) {
    return -1;
  }
  if (modelA > modelB) {
    return 1;
  }

  // names must be equal
  return 0;
});
	
	const arr = shipdata.map(i => `${i.model}`);
	const arr1 = shipdata.map(i => `${i.ID}`);
	

shipselect = document.getElementById('ship');
ship1select = document.getElementById('shipb');

arr.forEach((Stat1, index) => {
  const Stat2 = arr1[index];

shipselect.options[shipselect.options.length] = new Option(Stat1, Stat2);
ship1select.options[ship1select.options.length] = new Option(Stat1, Stat2);
});

});
document.getElementById("ship").value = ( "9999999" );
document.getElementById("shipb").value = ( "9999999" );



document.getElementById("model_a_header").innerHTML =("Select a ship");

document.getElementById("model_a").innerHTML =("--");
document.getElementById("level_a").innerHTML =("--");
document.getElementById("type_a").innerHTML =("--");
document.getElementById("variant_a").innerHTML =("--");
document.getElementById("size_a").innerHTML =("--");
document.getElementById("classes_a").innerHTML =("--");
document.getElementById("cargo_capacity_a").innerHTML =("--");
document.getElementById("os_visibility_a").innerHTML =("--");
document.getElementById("os_spotting_a").innerHTML =("--");
document.getElementById("crew_a").innerHTML =("--");
document.getElementById("target_tracking_a").innerHTML =("--");
document.getElementById("base_durability_a").innerHTML =("--");
document.getElementById("insurance_value_a").innerHTML =("--");
document.getElementById("os_best_sailing_point_a").innerHTML =("--");
document.getElementById("os_max_speed_a").innerHTML =("--");
document.getElementById("os_upwind_speed_a").innerHTML =("--");
document.getElementById("os_luffing_speed_a").innerHTML =("--");
document.getElementById("os_close_haul_speed_a").innerHTML =("--");
document.getElementById("os_beam_reach_speed_a").innerHTML =("--");
document.getElementById("os_broad_reach_speed_a").innerHTML =("--");
document.getElementById("os_running_speed_a").innerHTML =("--");
document.getElementById("battle_best_sailing_point_a").innerHTML =("--");
document.getElementById("battle_max_speed_a").innerHTML =("--");
document.getElementById("battle_acceleration_a").innerHTML =("--");
document.getElementById("battle_deceleration_a").innerHTML =("--");
document.getElementById("battle_turning_fast_a").innerHTML =("--");
document.getElementById("battle_turning_slow_a").innerHTML =("--");
document.getElementById("battle_turning_accelerating_a").innerHTML =("--");
document.getElementById("battle_turning_decelerating_a").innerHTML =("--");
document.getElementById("battle_upwind_speed_a").innerHTML =("--");
document.getElementById("battle_luffing_speed_a").innerHTML =("--");
document.getElementById("battle_close_haul_speed_a").innerHTML =("--");
document.getElementById("battle_beam_reach_speed_a").innerHTML =("--");
document.getElementById("battle_broad_reach_speed_a").innerHTML =("--");
document.getElementById("battle_running_speed_a").innerHTML =("--");
document.getElementById("structure_integrity_a").innerHTML =("--");
document.getElementById("port_armour_a").innerHTML =("--");
document.getElementById("starboard_armour_a").innerHTML =("--");
document.getElementById("bow_armour_a").innerHTML =("--");
document.getElementById("stern_armour_a").innerHTML =("--");
document.getElementById("mast_integrity_a").innerHTML =("--");
document.getElementById("structure_dr_a").innerHTML =("--");
document.getElementById("port_dr_a").innerHTML =("--");
document.getElementById("starboard_dr_a").innerHTML =("--");
document.getElementById("bow_dr_a").innerHTML =("--");
document.getElementById("stern_dr_a").innerHTML =("--");
document.getElementById("mast_dr_a").innerHTML =("--");
document.getElementById("mast_offence_a").innerHTML =("--");
document.getElementById("mast_defence_a").innerHTML =("--");
document.getElementById("mast_resist_a").innerHTML =("--");
document.getElementById("crew_offence_a").innerHTML =("--");
document.getElementById("crew_defence_a").innerHTML =("--");
document.getElementById("crew_resist_a").innerHTML =("--");
document.getElementById("bow_offence_a").innerHTML =("--");
document.getElementById("bow_defence_a").innerHTML =("--");
document.getElementById("bow_resist_a").innerHTML =("--");
document.getElementById("stern_offence_a").innerHTML =("--");
document.getElementById("stern_defence_a").innerHTML =("--");
document.getElementById("stern_resist_a").innerHTML =("--");
document.getElementById("sides_offence_a").innerHTML =("--");
document.getElementById("sides_defence_a").innerHTML =("--");
document.getElementById("sides_resist_a").innerHTML =("--");
document.getElementById("grappling_offence_a").innerHTML =("--");
document.getElementById("grappling_defence_a").innerHTML =("--");
document.getElementById("grappling_resist_a").innerHTML =("--");
document.getElementById("broadside_total_guns_a").innerHTML =("--");
document.getElementById("broadside_weight_a").innerHTML =("--");
document.getElementById("broadside_max_range_a").innerHTML =("--");
document.getElementById("broadside_max_damage_a").innerHTML =("--");
document.getElementById("broadside_damage_200_a").innerHTML =("--");
document.getElementById("broadside_dps_200_a").innerHTML =("--");
document.getElementById("broadside_damage_400_a").innerHTML =("--");
document.getElementById("broadside_dps_400_a").innerHTML =("--");
document.getElementById("top_deck_guns_per_side_a").innerHTML =("--");
document.getElementById("top_deck_weight_a").innerHTML =("--");
document.getElementById("top_deck_range_a").innerHTML =("--");
document.getElementById("top_deck_damage_gun_a").innerHTML =("--");
document.getElementById("top_deck_reload_a").innerHTML =("--");
document.getElementById("top_deck_max_damage_a").innerHTML =("--");
document.getElementById("top_deck_accuracy_200_a").innerHTML =("--");
document.getElementById("top_deck_damage_200_a").innerHTML =("--");
document.getElementById("top_deck_dps_200_a").innerHTML =("--");
document.getElementById("top_deck_accuracy_400_a").innerHTML =("--");
document.getElementById("top_deck_damage_400_a").innerHTML =("--");
document.getElementById("top_deck_dps_400_a").innerHTML =("--");
document.getElementById("upper_deck_guns_per_side_a").innerHTML =("--");
document.getElementById("upper_deck_weight_a").innerHTML =("--");
document.getElementById("upper_deck_range_a").innerHTML =("--");
document.getElementById("upper_deck_damage_gun_a").innerHTML =("--");
document.getElementById("upper_deck_reload_a").innerHTML =("--");
document.getElementById("upper_deck_max_damage_a").innerHTML =("--");
document.getElementById("upper_deck_accuracy_200_a").innerHTML =("--");
document.getElementById("upper_deck_damage_200_a").innerHTML =("--");
document.getElementById("upper_deck_dps_200_a").innerHTML =("--");
document.getElementById("upper_deck_accuracy_400_a").innerHTML =("--");
document.getElementById("upper_deck_damage_400_a").innerHTML =("--");
document.getElementById("upper_deck_dps_400_a").innerHTML =("--");
document.getElementById("middle_deck_guns_per_side_a").innerHTML =("--");
document.getElementById("middle_deck_weight_a").innerHTML =("--");
document.getElementById("middle_deck_range_a").innerHTML =("--");
document.getElementById("middle_deck_damage_gun_a").innerHTML =("--");
document.getElementById("middle_deck_reload_a").innerHTML =("--");
document.getElementById("middle_deck_max_damage_a").innerHTML =("--");
document.getElementById("middle_deck_accuracy_200_a").innerHTML =("--");
document.getElementById("middle_deck_damage_200_a").innerHTML =("--");
document.getElementById("middle_deck_dps_200_a").innerHTML =("--");
document.getElementById("middle_deck_accuracy_400_a").innerHTML =("--");
document.getElementById("middle_deck_damage_400_a").innerHTML =("--");
document.getElementById("middle_deck_dps_400_a").innerHTML =("--");
document.getElementById("gun_deck_guns_per_side_a").innerHTML =("--");
document.getElementById("gun_deck_weight_a").innerHTML =("--");
document.getElementById("gun_deck_range_a").innerHTML =("--");
document.getElementById("gun_deck_damage_gun_a").innerHTML =("--");
document.getElementById("gun_deck_reload_a").innerHTML =("--");
document.getElementById("gun_deck_max_damage_a").innerHTML =("--");
document.getElementById("gun_deck_accuracy_200_a").innerHTML =("--");
document.getElementById("gun_deck_damage_200_a").innerHTML =("--");
document.getElementById("gun_deck_dps_200_a").innerHTML =("--");
document.getElementById("gun_deck_accuracy_400_a").innerHTML =("--");
document.getElementById("gun_deck_damage_400_a").innerHTML =("--");
document.getElementById("gun_deck_dps_400_a").innerHTML =("--");
document.getElementById("bow_chasers_guns_per_side_a").innerHTML =("--");
document.getElementById("bow_chasers_weight_a").innerHTML =("--");
document.getElementById("bow_chasers_range_a").innerHTML =("--");
document.getElementById("bow_chasers_damage_gun_a").innerHTML =("--");
document.getElementById("bow_chasers_reload_a").innerHTML =("--");
document.getElementById("bow_chasers_max_damage_a").innerHTML =("--");
document.getElementById("bow_chasers_accuracy_200_a").innerHTML =("--");
document.getElementById("bow_chasers_damage_200_a").innerHTML =("--");
document.getElementById("bow_chasers_dps_200_a").innerHTML =("--");
document.getElementById("bow_chasers_accuracy_400_a").innerHTML =("--");
document.getElementById("bow_chasers_damage_400_a").innerHTML =("--");
document.getElementById("bow_chasers_dps_400_a").innerHTML =("--");
document.getElementById("stern_chasers_guns_per_side_a").innerHTML =("--");
document.getElementById("stern_chasers_weight_a").innerHTML =("--");
document.getElementById("stern_chasers_range_a").innerHTML =("--");
document.getElementById("stern_chasers_damage_gun_a").innerHTML =("--");
document.getElementById("stern_chasers_reload_a").innerHTML =("--");
document.getElementById("stern_chasers_max_damage_a").innerHTML =("--");
document.getElementById("stern_chasers_accuracy_200_a").innerHTML =("--");
document.getElementById("stern_chasers_damage_200_a").innerHTML =("--");
document.getElementById("stern_chasers_dps_200_a").innerHTML =("--");
document.getElementById("stern_chasers_accuracy_400_a").innerHTML =("--");
document.getElementById("stern_chasers_damage_400_a").innerHTML =("--");
document.getElementById("stern_chasers_dps_400_a").innerHTML =("--");
document.getElementById("swivel_guns_guns_per_side_a").innerHTML =("--");
document.getElementById("swivel_guns_weight_a").innerHTML =("--");
document.getElementById("swivel_guns_range_a").innerHTML =("--");
document.getElementById("swivel_guns_damage_gun_a").innerHTML =("--");
document.getElementById("swivel_guns_reload_a").innerHTML =("--");
document.getElementById("swivel_guns_max_damage_a").innerHTML =("--");
document.getElementById("swivel_accuracy_200_a").innerHTML =("--");
document.getElementById("swivel_damage_200_a").innerHTML =("--");
document.getElementById("swivel_dps_200_a").innerHTML =("--");
document.getElementById("swivel_accuracy_400_a").innerHTML =("--");
document.getElementById("swivel_damage_400_a").innerHTML =("--");
document.getElementById("swivel_dps_400_a").innerHTML =("--");
document.getElementById("last_updated_a").innerHTML =("--");



document.getElementById("model_b_header").innerHTML =("Select a ship");

document.getElementById("model_b").innerHTML =("--");
document.getElementById("level_b").innerHTML =("--");
document.getElementById("type_b").innerHTML =("--");
document.getElementById("variant_b").innerHTML =("--");
document.getElementById("size_b").innerHTML =("--");
document.getElementById("classes_b").innerHTML =("--");
document.getElementById("cargo_capacity_b").innerHTML =("--");
document.getElementById("os_visibility_b").innerHTML =("--");
document.getElementById("os_spotting_b").innerHTML =("--");
document.getElementById("crew_b").innerHTML =("--");
document.getElementById("target_tracking_b").innerHTML =("--");
document.getElementById("base_durability_b").innerHTML =("--");
document.getElementById("insurance_value_b").innerHTML =("--");
document.getElementById("os_best_sailing_point_b").innerHTML =("--");
document.getElementById("os_max_speed_b").innerHTML =("--");
document.getElementById("os_upwind_speed_b").innerHTML =("--");
document.getElementById("os_luffing_speed_b").innerHTML =("--");
document.getElementById("os_close_haul_speed_b").innerHTML =("--");
document.getElementById("os_beam_reach_speed_b").innerHTML =("--");
document.getElementById("os_broad_reach_speed_b").innerHTML =("--");
document.getElementById("os_running_speed_b").innerHTML =("--");
document.getElementById("battle_best_sailing_point_b").innerHTML =("--");
document.getElementById("battle_max_speed_b").innerHTML =("--");
document.getElementById("battle_acceleration_b").innerHTML =("--");
document.getElementById("battle_deceleration_b").innerHTML =("--");
document.getElementById("battle_turning_fast_b").innerHTML =("--");
document.getElementById("battle_turning_slow_b").innerHTML =("--");
document.getElementById("battle_turning_accelerating_b").innerHTML =("--");
document.getElementById("battle_turning_decelerating_b").innerHTML =("--");
document.getElementById("battle_upwind_speed_b").innerHTML =("--");
document.getElementById("battle_luffing_speed_b").innerHTML =("--");
document.getElementById("battle_close_haul_speed_b").innerHTML =("--");
document.getElementById("battle_beam_reach_speed_b").innerHTML =("--");
document.getElementById("battle_broad_reach_speed_b").innerHTML =("--");
document.getElementById("battle_running_speed_b").innerHTML =("--");
document.getElementById("structure_integrity_b").innerHTML =("--");
document.getElementById("port_armour_b").innerHTML =("--");
document.getElementById("starboard_armour_b").innerHTML =("--");
document.getElementById("bow_armour_b").innerHTML =("--");
document.getElementById("stern_armour_b").innerHTML =("--");
document.getElementById("mast_integrity_b").innerHTML =("--");
document.getElementById("structure_dr_b").innerHTML =("--");
document.getElementById("port_dr_b").innerHTML =("--");
document.getElementById("starboard_dr_b").innerHTML =("--");
document.getElementById("bow_dr_b").innerHTML =("--");
document.getElementById("stern_dr_b").innerHTML =("--");
document.getElementById("mast_dr_b").innerHTML =("--");
document.getElementById("mast_offence_b").innerHTML =("--");
document.getElementById("mast_defence_b").innerHTML =("--");
document.getElementById("mast_resist_b").innerHTML =("--");
document.getElementById("crew_offence_b").innerHTML =("--");
document.getElementById("crew_defence_b").innerHTML =("--");
document.getElementById("crew_resist_b").innerHTML =("--");
document.getElementById("bow_offence_b").innerHTML =("--");
document.getElementById("bow_defence_b").innerHTML =("--");
document.getElementById("bow_resist_b").innerHTML =("--");
document.getElementById("stern_offence_b").innerHTML =("--");
document.getElementById("stern_defence_b").innerHTML =("--");
document.getElementById("stern_resist_b").innerHTML =("--");
document.getElementById("sides_offence_b").innerHTML =("--");
document.getElementById("sides_defence_b").innerHTML =("--");
document.getElementById("sides_resist_b").innerHTML =("--");
document.getElementById("grappling_offence_b").innerHTML =("--");
document.getElementById("grappling_defence_b").innerHTML =("--");
document.getElementById("grappling_resist_b").innerHTML =("--");
document.getElementById("broadside_total_guns_b").innerHTML =("--");
document.getElementById("broadside_weight_b").innerHTML =("--");
document.getElementById("broadside_max_range_b").innerHTML =("--");
document.getElementById("broadside_max_damage_b").innerHTML =("--");
document.getElementById("broadside_damage_200_b").innerHTML =("--");
document.getElementById("broadside_dps_200_b").innerHTML =("--");
document.getElementById("broadside_damage_400_b").innerHTML =("--");
document.getElementById("broadside_dps_400_b").innerHTML =("--");
document.getElementById("top_deck_guns_per_side_b").innerHTML =("--");
document.getElementById("top_deck_weight_b").innerHTML =("--");
document.getElementById("top_deck_range_b").innerHTML =("--");
document.getElementById("top_deck_damage_gun_b").innerHTML =("--");
document.getElementById("top_deck_reload_b").innerHTML =("--");
document.getElementById("top_deck_max_damage_b").innerHTML =("--");
document.getElementById("top_deck_accuracy_200_b").innerHTML =("--");
document.getElementById("top_deck_damage_200_b").innerHTML =("--");
document.getElementById("top_deck_dps_200_b").innerHTML =("--");
document.getElementById("top_deck_accuracy_400_b").innerHTML =("--");
document.getElementById("top_deck_damage_400_b").innerHTML =("--");
document.getElementById("top_deck_dps_400_b").innerHTML =("--");
document.getElementById("upper_deck_guns_per_side_b").innerHTML =("--");
document.getElementById("upper_deck_weight_b").innerHTML =("--");
document.getElementById("upper_deck_range_b").innerHTML =("--");
document.getElementById("upper_deck_damage_gun_b").innerHTML =("--");
document.getElementById("upper_deck_reload_b").innerHTML =("--");
document.getElementById("upper_deck_max_damage_b").innerHTML =("--");
document.getElementById("upper_deck_accuracy_200_b").innerHTML =("--");
document.getElementById("upper_deck_damage_200_b").innerHTML =("--");
document.getElementById("upper_deck_dps_200_b").innerHTML =("--");
document.getElementById("upper_deck_accuracy_400_b").innerHTML =("--");
document.getElementById("upper_deck_damage_400_b").innerHTML =("--");
document.getElementById("upper_deck_dps_400_b").innerHTML =("--");
document.getElementById("middle_deck_guns_per_side_b").innerHTML =("--");
document.getElementById("middle_deck_weight_b").innerHTML =("--");
document.getElementById("middle_deck_range_b").innerHTML =("--");
document.getElementById("middle_deck_damage_gun_b").innerHTML =("--");
document.getElementById("middle_deck_reload_b").innerHTML =("--");
document.getElementById("middle_deck_max_damage_b").innerHTML =("--");
document.getElementById("middle_deck_accuracy_200_b").innerHTML =("--");
document.getElementById("middle_deck_damage_200_b").innerHTML =("--");
document.getElementById("middle_deck_dps_200_b").innerHTML =("--");
document.getElementById("middle_deck_accuracy_400_b").innerHTML =("--");
document.getElementById("middle_deck_damage_400_b").innerHTML =("--");
document.getElementById("middle_deck_dps_400_b").innerHTML =("--");
document.getElementById("gun_deck_guns_per_side_b").innerHTML =("--");
document.getElementById("gun_deck_weight_b").innerHTML =("--");
document.getElementById("gun_deck_range_b").innerHTML =("--");
document.getElementById("gun_deck_damage_gun_b").innerHTML =("--");
document.getElementById("gun_deck_reload_b").innerHTML =("--");
document.getElementById("gun_deck_max_damage_b").innerHTML =("--");
document.getElementById("gun_deck_accuracy_200_b").innerHTML =("--");
document.getElementById("gun_deck_damage_200_b").innerHTML =("--");
document.getElementById("gun_deck_dps_200_b").innerHTML =("--");
document.getElementById("gun_deck_accuracy_400_b").innerHTML =("--");
document.getElementById("gun_deck_damage_400_b").innerHTML =("--");
document.getElementById("gun_deck_dps_400_b").innerHTML =("--");
document.getElementById("bow_chasers_guns_per_side_b").innerHTML =("--");
document.getElementById("bow_chasers_weight_b").innerHTML =("--");
document.getElementById("bow_chasers_range_b").innerHTML =("--");
document.getElementById("bow_chasers_damage_gun_b").innerHTML =("--");
document.getElementById("bow_chasers_reload_b").innerHTML =("--");
document.getElementById("bow_chasers_max_damage_b").innerHTML =("--");
document.getElementById("bow_chasers_accuracy_200_b").innerHTML =("--");
document.getElementById("bow_chasers_damage_200_b").innerHTML =("--");
document.getElementById("bow_chasers_dps_200_b").innerHTML =("--");
document.getElementById("bow_chasers_accuracy_400_b").innerHTML =("--");
document.getElementById("bow_chasers_damage_400_b").innerHTML =("--");
document.getElementById("bow_chasers_dps_400_b").innerHTML =("--");
document.getElementById("stern_chasers_guns_per_side_b").innerHTML =("--");
document.getElementById("stern_chasers_weight_b").innerHTML =("--");
document.getElementById("stern_chasers_range_b").innerHTML =("--");
document.getElementById("stern_chasers_damage_gun_b").innerHTML =("--");
document.getElementById("stern_chasers_reload_b").innerHTML =("--");
document.getElementById("stern_chasers_max_damage_b").innerHTML =("--");
document.getElementById("stern_chasers_accuracy_200_b").innerHTML =("--");
document.getElementById("stern_chasers_damage_200_b").innerHTML =("--");
document.getElementById("stern_chasers_dps_200_b").innerHTML =("--");
document.getElementById("stern_chasers_accuracy_400_b").innerHTML =("--");
document.getElementById("stern_chasers_damage_400_b").innerHTML =("--");
document.getElementById("stern_chasers_dps_400_b").innerHTML =("--");
document.getElementById("swivel_guns_guns_per_side_b").innerHTML =("--");
document.getElementById("swivel_guns_weight_b").innerHTML =("--");
document.getElementById("swivel_guns_range_b").innerHTML =("--");
document.getElementById("swivel_guns_damage_gun_b").innerHTML =("--");
document.getElementById("swivel_guns_reload_b").innerHTML =("--");
document.getElementById("swivel_guns_max_damage_b").innerHTML =("--");
document.getElementById("swivel_accuracy_200_b").innerHTML =("--");
document.getElementById("swivel_damage_200_b").innerHTML =("--");
document.getElementById("swivel_dps_200_b").innerHTML =("--");
document.getElementById("swivel_accuracy_400_b").innerHTML =("--");
document.getElementById("swivel_damage_400_b").innerHTML =("--");
document.getElementById("swivel_dps_400_b").innerHTML =("--");
document.getElementById("last_updated_b").innerHTML =("--");

};