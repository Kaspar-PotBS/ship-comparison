(function () {
        highlight();
		
    });

    function highlight(){
		
		const shipstatsarray = ["level", "cargo_capacity", "os_spotting", "crew", "target_tracking", "base_durability", "insurance_value", "os_best_sailing_point", "os_max_speed", "os_upwind_speed", "os_luffing_speed", "os_close_haul_speed", "os_beam_reach_speed", "os_broad_reach_speed", "os_running_speed", "battle_best_sailing_point", "battle_max_speed", "battle_acceleration", "battle_deceleration", "battle_turning_fast", "battle_turning_slow", "battle_turning_accelerating", "battle_turning_decelerating", "battle_upwind_speed", "battle_luffing_speed", "battle_close_haul_speed", "battle_beam_reach_speed", "battle_broad_reach_speed", "battle_running_speed", "structure_integrity", "port_armour", "starboard_armour", "bow_armour", "stern_armour", "mast_integrity", "structure_dr", "port_dr", "starboard_dr", "bow_dr", "stern_dr", "mast_dr", "mast_offence", "mast_defence", "mast_resist", "crew_offence", "crew_defence", "crew_resist", "bow_offence", "bow_defence", "bow_resist", "stern_offence", "stern_defence", "stern_resist", "sides_offence", "sides_defence", "sides_resist", "grappling_offence", "grappling_defence", "grappling_resist", "broadside_total_guns", "broadside_weight", "broadside_max_range", "broadside_max_damage", "broadside_damage_200", "broadside_dps_200", "broadside_damage_400", "broadside_dps_400", "top_deck_range", "top_deck_damage_gun", "top_deck_max_damage", "top_deck_accuracy_200", "top_deck_damage_200", "top_deck_dps_200", "top_deck_accuracy_400", "top_deck_damage_400", "top_deck_dps_400", "upper_deck_range", "upper_deck_damage_gun", "upper_deck_max_damage", "upper_deck_accuracy_200", "upper_deck_damage_200", "upper_deck_dps_200", "upper_deck_accuracy_400", "upper_deck_damage_400", "upper_deck_dps_400", "middle_deck_range", "middle_deck_damage_gun", "middle_deck_max_damage", "middle_deck_accuracy_200", "middle_deck_damage_200", "middle_deck_dps_200", "middle_deck_accuracy_400", "middle_deck_damage_400", "middle_deck_dps_400", "gun_deck_range", "gun_deck_damage_gun", "gun_deck_max_damage", "gun_deck_accuracy_200", "gun_deck_damage_200", "gun_deck_dps_200", "gun_deck_accuracy_400", "gun_deck_damage_400", "gun_deck_dps_400", "bow_chasers_range", "bow_chasers_damage_gun", "bow_chasers_max_damage", "bow_chasers_accuracy_200", "bow_chasers_damage_200", "bow_chasers_dps_200", "bow_chasers_accuracy_400", "bow_chasers_damage_400", "bow_chasers_dps_400", "stern_chasers_range", "stern_chasers_damage_gun", "stern_chasers_max_damage", "stern_chasers_accuracy_200", "stern_chasers_damage_200", "stern_chasers_dps_200", "stern_chasers_accuracy_400", "stern_chasers_damage_400", "stern_chasers_dps_400", "swivel_guns_range", "swivel_guns_damage_gun", "swivel_guns_max_damage", "swivel_accuracy_200", "swivel_damage_200", "swivel_dps_200", "swivel_accuracy_400", "swivel_damage_400", "swivel_dps_400"];	
 

		for (let x of shipstatsarray) {

		Stat_ID = x;
		var Stat_ID_A = Stat_ID + "_a";
		var Stat_ID_B = Stat_ID + "_b";
		var Stat_ID_A_value = Stat_ID_A + "_value";
		var Stat_ID_B_value = Stat_ID_B + "_value";
		var ID_A = document.getElementById( Stat_ID_A );
		var ID_B = document.getElementById( Stat_ID_B );
		var valueA = Number(document.getElementById( Stat_ID_A_value ).value);
		var valueB = Number(document.getElementById( Stat_ID_B_value ).value);
		var comparestatus = [];
			 
				$( ID_A ).removeClass('comparematch');
				$( ID_B ).removeClass('comparematch');	
				$( ID_A ).removeClass('comparehigher');
				$( ID_B ).removeClass('comparelower');
				$( ID_A ).removeClass('comparelower');
				$( ID_B ).removeClass('comparehigher');
				$( ID_A ).removeClass('compareinvalid');
				$( ID_B ).removeClass('compareinvalid');

			if (valueA == valueB) {
								
                comparestatus = "match";
				$( ID_A ).addClass('comparematch');
				$( ID_B ).addClass('comparematch');	
            }
			
            else if (valueA > valueB) {
				
				
                comparestatus = "higher";
				$( ID_A ).addClass('comparehigher');
				$( ID_B ).addClass('comparelower');
            }
			
			else if (valueA < valueB) {
								
                comparestatus = "lower";
				$( ID_A ).addClass('comparelower');
				$( ID_B ).addClass('comparehigher');
			}
			
			else {
								
				
				comparestatus = "invalid";
				$( ID_A ).addClass('compareinvalid');
				$( ID_B ).addClass('compareinvalid');
			}
			 
			 highlightlower()
			 
}
	}

function highlightlower(){
	

const shipstatsarray1 = ["os_visibility", "top_deck_reload", "upper_deck_reload", "middle_deck_reload", "gun_deck_reload", "bow_chasers_reload", "stern_chasers_reload", "swivel_guns_reload"];


for (let x of shipstatsarray1) {

		Stat_ID = x;
		var Stat_ID_A = Stat_ID + "_a";
		var Stat_ID_B = Stat_ID + "_b";
		var Stat_ID_A_value = Stat_ID_A + "_value";
		var Stat_ID_B_value = Stat_ID_B + "_value";
		var ID_A = document.getElementById( Stat_ID_A );
		var ID_B = document.getElementById( Stat_ID_B );
		var valueA = Number(document.getElementById( Stat_ID_A_value ).value);
		var valueB = Number(document.getElementById( Stat_ID_B_value ).value);
		var comparestatus = [];
			 
				$( ID_A ).removeClass('comparematch');
				$( ID_B ).removeClass('comparematch');	
				$( ID_A ).removeClass('comparehigher');
				$( ID_B ).removeClass('comparelower');
				$( ID_A ).removeClass('comparelower');
				$( ID_B ).removeClass('comparehigher');
				$( ID_A ).removeClass('compareinvalid');
				$( ID_B ).removeClass('compareinvalid');

			if (valueA == valueB) {
								
                comparestatus = "match";
				$( ID_A ).addClass('comparematch');
				$( ID_B ).addClass('comparematch');	
            }
			
			else if (valueA == 0) {
								
				$( ID_A ).removeClass('comparehigher');
				$( ID_B ).removeClass('comparelower');
				
				$( ID_A ).addClass('comparelower');
				$( ID_B ).addClass('comparehigher');
			}
			
			else if (valueB == 0) {
				
				$( ID_A ).removeClass('comparelower');
				$( ID_B ).removeClass('comparehigher');
				$( ID_A ).addClass('comparehigher');
				$( ID_B ).addClass('comparelower');
			}
			
            else if (valueA > valueB) {

                comparestatus = "higher";
				$( ID_A ).addClass('comparelower');
				$( ID_B ).addClass('comparehigher');
            }
			
			else if (valueA < valueB) {
								
                comparestatus = "lower";
				$( ID_A ).addClass('comparehigher');
				$( ID_B ).addClass('comparelower');
			}	 
}

			highlightweight()

}



function highlightweight(){
	
	var localeselect = 'en-us';
	var n = [ "top_deck_weight", "upper_deck_weight",  "middle_deck_weight", "gun_deck_weight", "bow_chasers_weight",  "stern_chasers_weight", "swivel_guns_weight" ];
	var m = ["top_deck_guns_per_side", "upper_deck_guns_per_side", "middle_deck_guns_per_side", "gun_deck_guns_per_side","bow_chasers_guns_per_side", "stern_chasers_guns_per_side", "swivel_guns_guns_per_side"];

n.forEach((Stat1, index) => {
  const Stat2 = m[index];

		Stat_ID = Stat1;
		Stat_ID2 = Stat2;
		var Stat_ID_A = Stat_ID + "_a";
		var Stat_ID_B = Stat_ID + "_b";
		var Stat_ID2_A = Stat_ID2 + "_a";
		var Stat_ID2_B = Stat_ID2 + "_b";
		var Stat_ID_A_value = Stat_ID_A + "_value";
		var Stat_ID_B_value = Stat_ID_B + "_value";
		var ID_A = document.getElementById( Stat_ID_A );
		var ID2_A = document.getElementById( Stat_ID2_A );
		var ID_B = document.getElementById( Stat_ID_B );
		var ID2_B = document.getElementById( Stat_ID2_B );
		var valueA = Number(document.getElementById( Stat_ID_A_value ).value);
		var valueB = Number(document.getElementById( Stat_ID_B_value ).value);
		var comparestatus = [];
			 
				$( ID_A ).removeClass('comparematch');
				$( ID2_A ).removeClass('comparematch');
				$( ID_B ).removeClass('comparematch');
				$( ID2_B ).removeClass('comparematch');				
				$( ID_A ).removeClass('comparehigher');
				$( ID2_A ).removeClass('comparehigher');
				$( ID_B ).removeClass('comparelower');
				$( ID2_B ).removeClass('comparelower');
				$( ID_A ).removeClass('comparelower');
				$( ID2_A ).removeClass('comparelower');
				$( ID_B ).removeClass('comparehigher');
				$( ID2_B ).removeClass('comparehigher');
				$( ID_A ).removeClass('compareinvalid');
				$( ID2_A ).removeClass('compareinvalid');
				$( ID_B ).removeClass('compareinvalid');
				$( ID2_B ).removeClass('compareinvalid');

			if (valueA == valueB) {
								
                comparestatus = "match";
				$( ID_A ).addClass('comparematch');
				$( ID2_A ).addClass('comparematch');
				$( ID_B ).addClass('comparematch');	
				$( ID2_B ).addClass('comparematch');	
            }
			
            else if (valueA > valueB) {

                comparestatus = "higher";
				$( ID_A ).addClass('comparehigher');
				$( ID2_A ).addClass('comparehigher');
				$( ID_B ).addClass('comparelower');
				$( ID2_B ).addClass('comparelower');
            }
			
			else if (valueA < valueB) {
								
                comparestatus = "lower";
				$( ID_A ).addClass('comparelower');
				$( ID2_A ).addClass('comparelower');
				$( ID_B ).addClass('comparehigher');
				$( ID2_B ).addClass('comparehigher');
			}
			
			else {

				comparestatus = "invalid";
				$( ID_A ).addClass('compareinvalid');
				$( ID2_A ).addClass('compareinvalid');
				$( ID_B ).addClass('compareinvalid');
				$( ID2_B ).addClass('compareinvalid');
			}

});
}