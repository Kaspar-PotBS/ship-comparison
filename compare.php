<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/includes/header_php.php");
$show_footer_ad = false; //turn off footer add cause we want additional skyscrapers.

$ship_1 = filter_input(INPUT_POST,'ship1', FILTER_SANITIZE_NUMBER_INT, array('options'=>array('default'=>0)));
$ship_2 = filter_input(INPUT_POST,'ship2', FILTER_SANITIZE_NUMBER_INT, array('options'=>array('default'=>0)));
$ship_1_permalink = filter_input(INPUT_GET, 'permalink', FILTER_SANITIZE_STRING, array('options'=>array('default'=>'')));
$ship_2_permalink = filter_input(INPUT_GET, 'permalink2', FILTER_SANITIZE_STRING, array('options'=>array('default'=>'')));

if ($ship_1 == 0) {
    $ship_1 = filter_input(INPUT_GET,'id', FILTER_SANITIZE_NUMBER_INT, array('options'=>array('default'=>0)));    
}

$SQL = "SELECT *
	FROM ship_data AS sd
	LEFT JOIN ship_variants AS sv ON sd.ship_variant = sv.variant_id
	LEFT JOIN ship_sizes AS ss ON sd.ship_size = ss.size_id
	LEFT JOIN ship_types AS st ON sd.ship_type = st.shiptype_id
	LEFT JOIN site_users AS su ON sd.ship_updated_by = su.info_uid
	WHERE ship_id = '".$ship_1."' OR ship_permalink = '".mysql_real_escape_string($ship_1_permalink)."'";
$QRY = mysql_query($SQL);

if (mysql_num_rows($QRY) == 0) {
    header("location: /ships");
    die;
}

$SHIP_1 = mysql_fetch_assoc($QRY);
$ship_1 = $SHIP_1['ship_id'];
$ship_1_permalink = $SHIP_1['ship_permalink'];

if (@$ship_2 != 0 || $ship_2_permalink != '') {
    $SQL = "SELECT *
		    FROM ship_data AS sd
		    LEFT JOIN ship_variants AS sv ON sd.ship_variant = sv.variant_id
		    LEFT JOIN ship_sizes AS ss ON sd.ship_size = ss.size_id
		    LEFT JOIN ship_types AS st ON sd.ship_type = st.shiptype_id
		    LEFT JOIN site_users AS su ON sd.ship_updated_by = su.info_uid
		    WHERE ship_id = '".$ship_2."' OR ship_permalink = '".mysql_real_escape_string($ship_2_permalink)."'";
    $QRY = mysql_query($SQL);
    $SHIP_2 = mysql_fetch_assoc($QRY);
    $ship_2 = $SHIP_2['ship_id'];
    $ship_2_permalink = $SHIP_2['ship_permalink'];
    $canonical = "/ships/$ship_1_permalink/compare/$ship_2_permalink";    
} else {
    $canonical = "/ships/$ship_1_permalink";
}

$numberOfGuns = $SHIP_1['ship_topdeck_number'] + $SHIP_1['ship_upper_number'] + $SHIP_1['ship_mid_number'] + $SHIP_1['ship_gundeck_number'];
$broadsideWeight = (($SHIP_1['ship_topdeck_number'] * $SHIP_1['ship_topdeck_weight']) + ($SHIP_1['ship_upper_number'] * $SHIP_1['ship_upper_weight']) + ($SHIP_1['ship_mid_number'] * $SHIP_1['ship_mid_weight']) + ($SHIP_1['ship_gundeck_number'] * $SHIP_1['ship_gundeck_number'])) / 2;

$pageTitle = $SHIP_1['ship_name']." - Ship Details";
$metaDescription = $SHIP_1['ship_name']." (Lvl ".$SHIP_1['ship_level']."): A ".strtolower($SHIP_1['size_name'])." ".$numberOfGuns." gun (".number_format($broadsideWeight,0)." lbs) ".strtolower($SHIP_1['shiptype_name'])." with a complement of ".$SHIP_1['ship_crew']." crew and a maximum battle speed of ".number_format($SHIP_1['ship_max_battle_speed'],2)." kts at ".$SHIP_1['ship_best_point']." degrees to the wind.";
$metaKeywords = str_replace(" ",",",$SHIP_1['ship_name']).",".$SHIP_1['ship_name'].",pirates,burning sea,potbs,mmo,massively multiplayer,online,rpg,role playing,game,ships,boats,vessels,navy,privateer,freetrader,portalus games,portalus";
$jsFiles[] = 'compare.js';

require_once(DOC_ROOT . "/includes/header_html.php");

$widget_location = 2;

//Get ad code

switch ($_SESSION['geoCountry']) {

	case "GB": //United Kingdom
	case "GG": //Guernsey
	case "IM": //Isle of Man
	case "JE": //Jersey
	$amazon = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab" id="Player_91f3d433-010e-4bd5-ac90-98807073bf44"  WIDTH="160px" HEIGHT="300px"> <PARAM NAME="movie" VALUE="http://ws.amazon.co.uk/widgets/q?ServiceVersion=20070822&MarketPlace=GB&ID=V20070822%2FGB%2Fpotcom-21%2F8014%2F91f3d433-010e-4bd5-ac90-98807073bf44&Operation=GetDisplayTemplate"><PARAM NAME="quality" VALUE="high"><PARAM NAME="bgcolor" VALUE="#FFFFFF"><PARAM NAME="allowscriptaccess" VALUE="always"><embed src="http://ws.amazon.co.uk/widgets/q?ServiceVersion=20070822&MarketPlace=GB&ID=V20070822%2FGB%2Fpotcom-21%2F8014%2F91f3d433-010e-4bd5-ac90-98807073bf44&Operation=GetDisplayTemplate" id="Player_91f3d433-010e-4bd5-ac90-98807073bf44" quality="high" bgcolor="#ffffff" name="Player_91f3d433-010e-4bd5-ac90-98807073bf44" allowscriptaccess="always"  type="application/x-shockwave-flash" align="middle" height="300px" width="160px"></embed></OBJECT> <NOSCRIPT><A HREF="http://ws.amazon.co.uk/widgets/q?ServiceVersion=20070822&MarketPlace=GB&ID=V20070822%2FGB%2Fpotcom-21%2F8014%2F91f3d433-010e-4bd5-ac90-98807073bf44&Operation=NoScript">Amazon.co.uk Widgets</A></NOSCRIPT>';
	break;

	case "US": //Unites States
	case "UM": //US Outlying Islands
	case "CA": //Canada
	case "MX": //Mexico
	$amazon = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab" id="Player_635301d5-f919-491c-b212-79e79235b3fb"  WIDTH="160px" HEIGHT="300px"> <PARAM NAME="movie" VALUE="http://ws.amazon.com/widgets/q?ServiceVersion=20070822&MarketPlace=US&ID=V20070822%2FUS%2Fpotcom02-20%2F8014%2F635301d5-f919-491c-b212-79e79235b3fb&Operation=GetDisplayTemplate"><PARAM NAME="quality" VALUE="high"><PARAM NAME="bgcolor" VALUE="#FFFFFF"><PARAM NAME="allowscriptaccess" VALUE="always"><embed src="http://ws.amazon.com/widgets/q?ServiceVersion=20070822&MarketPlace=US&ID=V20070822%2FUS%2Fpotcom02-20%2F8014%2F635301d5-f919-491c-b212-79e79235b3fb&Operation=GetDisplayTemplate" id="Player_635301d5-f919-491c-b212-79e79235b3fb" quality="high" bgcolor="#ffffff" name="Player_635301d5-f919-491c-b212-79e79235b3fb" allowscriptaccess="always"  type="application/x-shockwave-flash" align="middle" height="300px" width="160px"></embed></OBJECT> <NOSCRIPT><A HREF="http://ws.amazon.com/widgets/q?ServiceVersion=20070822&MarketPlace=US&ID=V20070822%2FUS%2Fpotcom02-20%2F8014%2F635301d5-f919-491c-b212-79e79235b3fb&Operation=NoScript">Amazon.com Widgets</A></NOSCRIPT>';
	break;
}



?>
<div class='thinRightColumn'>

	<div style='height: 74px;'></div>

	<div class='ad_right_skyscraper'>
	<?php
	if ($_SERVER['HTTP_HOST'] != DEV_SERVER) {

	if ($widget_location == 1) {
		echo $amazon;
	} else {

	/* ADSENSE UNIT: PotBS Companion Skyscraper - IMAGE ONLY */
	?>
	<script type="text/javascript"><!--
	google_ad_client = "pub-5502305746682460";
	google_ad_slot = "3062693191";
	google_ad_width = 160;
	google_ad_height = 600;
	//-->
	</script>
	<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>
	<?php
	}
	}
	?>
	</div>
	<hr/>

	<div class='ad_right_link_unit'>
	<?php
	if ($_SERVER['HTTP_HOST'] != DEV_SERVER) {

	/* ADSENSE UNIT: PotBS Companion Link Unit */
	?>
	<script type="text/javascript"><!--
	google_ad_client = "pub-5502305746682460";

	google_ad_slot = "5141070629";
	google_ad_width = 160;
	google_ad_height = 90;
	//-->
	</script>
	<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>
	<?php
	}
	?>
	</div>

	<div style='height: 570px;'></div>

	<div class='ad_right_skyscraper'>
	<?php
	if ($_SERVER['HTTP_HOST'] != DEV_SERVER) {

	if ($widget_location == 2) {
		echo $amazon;
	} else {

	/* ADSENSE UNIT: PotBS Companion Skyscraper - TEXT ONLY */
	?>
	<script type="text/javascript"><!--
	google_ad_client = "pub-5502305746682460";
	google_ad_slot = "4293363379";
	google_ad_width = 160;
	google_ad_height = 600;
	//-->
	</script>
	<script type="text/javascript"
	src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>
	<?php
	}
	}
	?>
	</div>

	<div style='height: 565px;'></div>

	<div class='ad_right_link_unit'>
	<?php
	if ($_SERVER['HTTP_HOST'] != DEV_SERVER) {
	/* ADSENSE UNIT: PotBS CompanionLink Unit */
	?>
	<script type="text/javascript"><!--
	google_ad_client = "pub-5502305746682460";

	google_ad_slot = "5141070629";
	google_ad_width = 160;
	google_ad_height = 90;
	//-->
	</script>
	<script type="text/javascript"
	src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>
	<?php
	}
	?>
	</div>

	<hr/>

	<div class='ad_right_skyscraper'>
	<?php
	if ($_SERVER['HTTP_HOST'] != DEV_SERVER) {

	if ($widget_location == 3) {
		echo $amazon;
	} else {

	/* ADSENSE UNIT: PotBS Lowest Skyscraper */
	?>
	<script type="text/javascript"><!--
	google_ad_client = "pub-5502305746682460";
	google_ad_slot = "9660929510";
	google_ad_width = 160;
	google_ad_height = 600;
	//-->
	</script>
	<script type="text/javascript"
	src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
	</script>
	<?php
	}
	}
	?>
	</div>

</div>

<div id='mediumInnerWrapper'>
	<h1 style='font-size: 2.2em; padding-top: 0px; margin-top: 0px;'><?php echo $SHIP_1['ship_name']; ?>
	<?php
	if ($SESSION->auth) {
		echo "&nbsp;<span style='font-size: 7pt; font-weight: normal;'><a href='/ships/".$SHIP_1['ship_permalink']."/edit'>(Edit Ship Details)</a></span>";
	}
	?>
	</h1>
	<form name='compForm' action='' method='get'>
    	
	Compare To:
	<select name='ship2' onchange='updateCompareForm();'>
		 <option value=''>-- n/a --</option>
	<?php
		$SQL = "SELECT ship_id, ship_name, ship_permalink FROM ship_data WHERE ship_id != '".$ship_1."' ORDER BY ship_name ASC";
		$QRY = mysql_query($SQL);

		while ($ROW = mysql_fetch_assoc($QRY)) {
		$SEL = (@$ship_2 == $ROW['ship_id']) ? "selected='selected'" : "";
		echo "<option ".$SEL." value='/ships/".$SHIP_1['ship_permalink']."/compare/".$ROW['ship_permalink']."'>".$ROW['ship_name']."</option>\r\n";
		}
	?>
	</select>
	</form>
	<hr/>

	<h3 class='compact'>Ship Basics</h3>
	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>

		<tr>
		<td width='30%' class='thead'>Model</td>
		<td width='27.5%'><?php echo $SHIP_1['ship_name'];?></td>
		<td width='27.5%'><?php echo @$SHIP_2['ship_name'];?></td>
		<td width='15%'></td>
		</tr>

		<tr>
		<td class='thead'>Last Updated:</td>
		<td><?php echo date("jS M Y, g:ia",strtotime($SHIP_1['ship_record_updated']));?></td>
		<td><?php echo isset($SHIP_2) ? date("jS M Y, g:ia",strtotime(@$SHIP_2['ship_record_updated'])) : "&nbsp;";?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>Updated By:</td>
		<td><?php echo ucwords($SHIP_1['info_username']); ?></td>
		<td><?php echo isset($SHIP_2) ? ucwords(@$SHIP_2['info_username']) : "&nbsp;"; ?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Level:</td>
		<td><?php echo $SHIP_1['ship_level']; ?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_level'] : "&nbsp;"; ?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>Type:</td>
		<td><?php echo $SHIP_1['shiptype_name']; ?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['shiptype_name'] : "&nbsp;"; ?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>Variant:</td>
		<td><?php echo $SHIP_1['variant_name']; ?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['variant_name'] : "&nbsp;"; ?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>Size:</td>
		<td><?php echo $SHIP_1['size_name']; ?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['size_name'] : "&nbsp;"; ?></td>
		<td></td>
		</tr>

		<tr>
		<td class='thead'>Classes:</td>
		<td>
			<?php
			$CLASSES_1 = array();
			if ($SHIP_1['ship_navalofficer'] == 1) { $CLASSES_1[] = "NO"; }
			if ($SHIP_1['ship_privateer']    == 1) { $CLASSES_1[] = "PV"; }
			if ($SHIP_1['ship_freetrader']   == 1) { $CLASSES_1[] = "FT"; }
			if ($SHIP_1['ship_buccaneer']    == 1) { $CLASSES_1[] = "BC"; }
			if ($SHIP_1['ship_cutthroat']    == 1) { $CLASSES_1[] = "CT"; }
			echo join(" / ",$CLASSES_1);
			?>
		</td>

		<td>
			<?php
			$CLASSES_2 = array();
			if (@$SHIP_2['ship_navalofficer'] == 1) { $CLASSES_2[] = "NO"; }
			if (@$SHIP_2['ship_privateer']    == 1) { $CLASSES_2[] = "PV"; }
			if (@$SHIP_2['ship_freetrader']   == 1) { $CLASSES_2[] = "FT"; }
			if (@$SHIP_2['ship_buccaneer']    == 1) { $CLASSES_2[] = "BC"; }
			if (@$SHIP_2['ship_cutthroat']    == 1) { $CLASSES_2[] = "CT"; }
			echo join(" / ",$CLASSES_2);
			?>
		</td>
		</tr>
	</table>

	<h3 class='compact'>General Information</h3>
	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>
		<tr>
		<td width='30%'class='thead'>Cargo Capacity</td>
		<td width='27.5%'><?php echo $SHIP_1['ship_cargo_capacity'];?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? @$SHIP_2['ship_cargo_capacity'] : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($SHIP_1['ship_cargo_capacity'], @$SHIP_2['ship_cargo_capacity']); ?></td>
		</tr>

		<tr>
		<td class='thead'>OS Visibility</td>
		<td><?php echo $SHIP_1['ship_os_visibility'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_os_visibility'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare(@$SHIP_2['ship_os_visibility'], $SHIP_1['ship_os_visibility']); ?></td>
		</tr>

		<tr>
		<td class='thead'>OS Spotting</td>
		<td><?php echo $SHIP_1['ship_os_spotting'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_os_spotting'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_os_spotting'],@$SHIP_2['ship_os_spotting']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Crew</td>
		<td><?php echo $SHIP_1['ship_crew'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_crew'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_crew'],@$SHIP_2['ship_crew']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Target Tracking</td>
		<td><?php echo $SHIP_1['ship_target_tracking'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_target_tracking'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_target_tracking'],@$SHIP_2['ship_target_tracking']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Base Durability</td>
		<td><?php echo $SHIP_1['ship_base_durability'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_base_durability'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_base_durability'],@$SHIP_2['ship_base_durability']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Insurance Value</td>
		<td><?php echo number_format($SHIP_1['ship_insurance'],0)." dbs";?></td>
		<td><?php echo isset($SHIP_2) ? @number_format($SHIP_2['ship_insurance'],0)." dbs" : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_insurance'],@$SHIP_2['ship_insurance']); ?></td>
		</tr>


	</table>

	<h3 class='compact'>Open Sea Manoevering</h3>

	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>

		<tr>
		<td class='thead'>Best Sailing Point</td>
		<td><?php echo $SHIP_1['ship_best_point'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_best_point'] : "&nbsp;"; ?></td>
		<td>&nbsp;</td>
		</tr>

		<tr>
			<td width='30%'class='thead'>Max Speed (Open Sea)</td>
			<td width='27.5%'><?php echo $SHIP_1['ship_max_os_speed'];?></td>
			<td width='27.5%'><?php echo isset($SHIP_2) ? @$SHIP_2['ship_max_os_speed'] : "&nbsp;"; ?></td>
			<td width='15%'><?php echo percentageCompare($SHIP_1['ship_max_os_speed'], @$SHIP_2['ship_max_os_speed']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<?php
			$speedTypes = array("upwind"=>"Upwind","luffing"=>"Luffing","closehaul"=>"Close Haul","beamreach"=>"Beam Reach","broadreach"=>"Broad Reach","running"=>"Running");

			foreach ($speedTypes as $type=>$nice) {

				$ship1_speed = number_format($SHIP_1['ship_max_os_speed'] * $SHIP_1['ship_speedmod_'.$type],2);
				if (isset($SHIP_2)) {
					$ship2_speed = number_format($SHIP_2['ship_max_os_speed'] * $SHIP_2['ship_speedmod_'.$type],2);
				} else {
					$ship2_speed = 0;
				}
		?>

		<tr>
			<td width='30%'class='thead'><?php echo $nice; ?> Speed</td>
			<td width='27.5%'><?php echo $ship1_speed;?></td>
			<td width='27.5%'><?php echo isset($SHIP_2) ? @$ship2_speed : "&nbsp;"; ?></td>
			<td width='15%'><?php echo percentageCompare($ship1_speed, @$ship2_speed); ?></td>
		</tr>

		<?php
			}
		?>


	</table>

	<h3 class='compact'>Battle Manoevering</h3>

	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>

		<tr>
		<td class='thead'>Best Sailing Point</td>
		<td><?php echo $SHIP_1['ship_best_point'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_best_point'] : "&nbsp;"; ?></td>
		<td>&nbsp;</td>
		</tr>

		<tr>
		<td width='30%'class='thead'>Max Speed (Battle)</td>
		<td width='27.5%'><?php echo $SHIP_1['ship_max_battle_speed'];?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? @$SHIP_2['ship_max_battle_speed'] : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($SHIP_1['ship_max_battle_speed'], @$SHIP_2['ship_max_battle_speed']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Acceleration</td>
		<td><?php echo $SHIP_1['ship_accel'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_accel'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_accel'],@$SHIP_2['ship_accel']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Deceleration</td>
		<td><?php echo $SHIP_1['ship_decel'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_decel'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_decel'],@$SHIP_2['ship_decel']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Turning, Fast</td>
		<td><?php echo $SHIP_1['ship_turning_fast'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_turning_fast'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_turning_fast'],@$SHIP_2['ship_turning_fast']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Turning, Slow</td>
		<td><?php echo $SHIP_1['ship_turning_slow'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_turning_slow'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_turning_slow'],@$SHIP_2['ship_turning_slow']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Turning, Accelerating</td>
		<td><?php echo $SHIP_1['ship_turning_accel'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_turning_accel'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_turning_accel'],@$SHIP_2['ship_turning_accel']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Turning, Decelerating</td>
		<td><?php echo $SHIP_1['ship_turning_decel'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_turning_decel'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_turning_decel'],@$SHIP_2['ship_turning_decel']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<?php
			reset($speedTypes); //already set in OS section above

			foreach ($speedTypes as $type=>$nice) {

				$ship1_speed = number_format($SHIP_1['ship_max_battle_speed'] * $SHIP_1['ship_speedmod_'.$type],2);
				if (isset($SHIP_2)) {
					$ship2_speed = number_format($SHIP_2['ship_max_battle_speed'] * $SHIP_2['ship_speedmod_'.$type],2);
				} else {
					$ship2_speed = 0;
				}
		?>

		<tr>
			<td width='30%'class='thead'><?php echo $nice; ?> Speed</td>
			<td width='27.5%'><?php echo $ship1_speed;?></td>
			<td width='27.5%'><?php echo isset($SHIP_2) ? @$ship2_speed : "&nbsp;"; ?></td>
			<td width='15%'><?php echo percentageCompare($ship1_speed, @$ship2_speed); ?></td>
		</tr>

		<?php
			}
		?>

	</table>


	<h3 class='compact'>Armour and Damage Resistance</h3>

	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>
		<tr>
		<td width='30%'class='thead'>Structure Integrity</td>
		<td width='27.5%'><?php echo $SHIP_1['ship_hull_integ'];?></td>
		<td width='27.5%'><?php echo isset($SHIP_1['ship_hull_integ']) ? @$SHIP_2['ship_hull_integ'] : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($SHIP_1['ship_hull_integ'],@$SHIP_2['ship_hull_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Port Armour</td>
		<td><?php echo $SHIP_1['ship_port_integ'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_port_integ'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_port_integ'],@$SHIP_2['ship_port_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Startboard Armour</td>
		<td><?php echo $SHIP_1['ship_star_integ'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_star_integ'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_star_integ'],@$SHIP_2['ship_star_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Bow Armour</td>
		<td><?php echo $SHIP_1['ship_bow_integ'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_bow_integ'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_bow_integ'],@$SHIP_2['ship_bow_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Stern Armour</td>
		<td><?php echo $SHIP_1['ship_stern_integ'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_stern_integ'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_stern_integ'],@$SHIP_2['ship_stern_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Mast Integrity</td>
		<td><?php echo $SHIP_1['ship_sail_integ'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sail_integ'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sail_integ'],@$SHIP_2['ship_sail_integ']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Structure DR</td>
		<td><?php echo $SHIP_1['ship_hull_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_hull_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_hull_dr'],@$SHIP_2['ship_hull_dr']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Port DR</td>
		<td><?php echo $SHIP_1['ship_port_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_port_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_port_dr'],@$SHIP_2['ship_port_dr']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Startboard DR</td>
		<td><?php echo $SHIP_1['ship_star_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_star_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_star_dr'],@$SHIP_2['ship_star_dr']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Bow DR</td>
		<td><?php echo $SHIP_1['ship_bow_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_bow_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_bow_dr'],@$SHIP_2['ship_bow_dr']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Stern DR</td>
		<td><?php echo $SHIP_1['ship_stern_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_stern_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_stern_dr'],@$SHIP_2['ship_stern_dr']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Mast DR</td>
		<td><?php echo $SHIP_1['ship_sails_dr'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sails_dr'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sails_dr'],@$SHIP_2['ship_sails_dr']); ?></td>
		</tr>

	</table>

	<h3 class='compact'>Offence/Defence/Resistance Modifiers</h3>

	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>
		<tr>
		<td width='30%'class='thead'>Mast, Offence</td>
		<td width='27.5%'><?php echo $SHIP_1['ship_sails_mod_off'];?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sails_mod_off'] : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($SHIP_1['ship_sails_mod_off'],@$SHIP_2['ship_sails_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Mast, Defence</td>
		<td><?php echo $SHIP_1['ship_sails_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sails_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sails_mod_def'],@$SHIP_2['ship_sails_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Mast, Resist</td>
		<td><?php echo $SHIP_1['ship_crew_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_crew_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_crew_mod_res'],@$SHIP_2['ship_crew_mod_res']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Crew, Offence</td>
		<td><?php echo $SHIP_1['ship_crew_mod_off'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_crew_mod_off'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_crew_mod_off'],@$SHIP_2['ship_crew_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Crew, Defence</td>
		<td><?php echo $SHIP_1['ship_crew_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_crew_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_crew_mod_def'],@$SHIP_2['ship_crew_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Crew, Resist</td>
		<td><?php echo $SHIP_1['ship_crew_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_crew_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_crew_mod_res'],@$SHIP_2['ship_crew_mod_res']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Bow, Offence</td>
		<td><?php echo $SHIP_1['ship_bow_mod_off'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_bow_mod_off'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_bow_mod_off'],@$SHIP_2['ship_bow_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Bow, Defence</td>
		<td><?php echo $SHIP_1['ship_bow_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_bow_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_bow_mod_def'],@$SHIP_2['ship_bow_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Bow, Resist</td>
		<td><?php echo $SHIP_1['ship_bow_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_bow_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_bow_mod_res'],@$SHIP_2['ship_bow_mod_res']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Stern, Offence</td>
		<td><?php echo $SHIP_1['ship_stern_mod_off'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_stern_mod_off'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_stern_mod_off'],@$SHIP_2['ship_stern_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Stern, Defence</td>
		<td><?php echo $SHIP_1['ship_stern_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_stern_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_stern_mod_def'],@$SHIP_2['ship_stern_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Stern, Resist</td>
		<td><?php echo $SHIP_1['ship_stern_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_stern_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_stern_mod_res'],@$SHIP_2['ship_stern_mod_res']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Sides, Offence</td>
		<td><?php echo $SHIP_1['ship_sides_mod_off'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sides_mod_off'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sides_mod_off'],@$SHIP_2['ship_sides_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Sides, Defence</td>
		<td><?php echo $SHIP_1['ship_sides_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sides_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sides_mod_def'],@$SHIP_2['ship_sides_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Sides, Resist</td>
		<td><?php echo $SHIP_1['ship_sides_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_sides_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_sides_mod_res'],@$SHIP_2['ship_sides_mod_res']); ?></td>
		</tr>

		<tr>
		<td class='thead'>&nbsp;</td>
		<td colspan='3'>&nbsp;</td>
		</tr>

		<tr>
		<td class='thead'>Grappling, Offence</td>
		<td><?php echo $SHIP_1['ship_grap_mod_off'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_grap_mod_off'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_grap_mod_off'],@$SHIP_2['ship_grap_mod_off']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Grappling, Defence</td>
		<td><?php echo $SHIP_1['ship_grap_mod_def'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_grap_mod_def'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_grap_mod_def'],@$SHIP_2['ship_grap_mod_def']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Grappling, Resist</td>
		<td><?php echo $SHIP_1['ship_grap_mod_res'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_grap_mod_res'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_grap_mod_res'],@$SHIP_2['ship_grap_mod_res']); ?></td>
		</tr>
	</table>

	<h3 class='compact'>Armament</h3>
	<h4>Full Broadside</h4>
	<?php
	$GUN_DECKS = array("topdeck"=>"Top Deck", "upper"=>"Upper Deck", "mid"=>"Middle Deck", "gundeck"=>"Gun Deck");

	$s1_broadside_guns = 0;
	$s1_broadside_weight = 0;
	$s1_max_damage = 0;
	$s1_damage_200 = 0;
	$s1_damage_400 = 0;
	$s1_dps_200 = 0;
	$s1_dps_400 = 0;
	$s1_max_range = 0;

	if (isset($SHIP_2)) {
		$s2_broadside_guns = 0;
		$s2_broadside_weight = 0;
		$s2_max_damage = 0;
		$s2_damage_200 = 0;
		$s2_damage_400 = 0;
		$s2_dps_200 = 0;
		$s2_dps_400 = 0;
		$s2_max_range = 0;
	}

	foreach ($GUN_DECKS as $db_key => $title) {

		//Calculations for full broadside stats.

		$deck_number          = $SHIP_1['ship_'.$db_key.'_number'];
		$deck_weight          = $SHIP_1['ship_'.$db_key.'_number'] * $SHIP_1['ship_'.$db_key.'_weight'];
		$deck_accuracy_200    = ($SHIP_1['ship_'.$db_key.'_acc_short'] > 100) ? 100 : $SHIP_1['ship_'.$db_key.'_acc_short'];
		$deck_accuracy_400    = ($SHIP_1['ship_'.$db_key.'_acc_long'] > 100) ? 100 : $SHIP_1['ship_'.$db_key.'_acc_long'];
		$deck_max_damage      = $SHIP_1['ship_'.$db_key.'_number'] * $SHIP_1['ship_'.$db_key.'_dmg'];
		$deck_damage_200      = ($deck_accuracy_200 / 100) * $deck_max_damage;
		$deck_damage_400      = ($deck_accuracy_400 / 100) * $deck_max_damage;
		$deck_reload          = $SHIP_1['ship_'.$db_key.'_reload'];
		$deck_dps_200         = ($deck_reload > 0) ? $deck_damage_200 / $deck_reload : 0;
		$deck_dps_400         = ($deck_reload > 0) ? $deck_damage_400 / $deck_reload : 0;
		$deck_range           = $SHIP_1['ship_'.$db_key.'_range'];

		$s1_broadside_guns += $deck_number;
		$s1_broadside_weight += $deck_weight / 2;
		$s1_max_damage += $deck_max_damage / 2;
		$s1_damage_200 += $deck_damage_200 / 2;
		$s1_damage_400 += $deck_damage_400 / 2;
		$s1_dps_200 += $deck_dps_200 / 2;
		$s1_dps_400 += $deck_dps_400 / 2;
		$s1_max_range = ($deck_range > $s1_max_range) ? $deck_range : $s1_max_range;

		if (isset($SHIP_2)) {
		$deck_number          = $SHIP_2['ship_'.$db_key.'_number'];
		$deck_weight          = $SHIP_2['ship_'.$db_key.'_number'] * $SHIP_2['ship_'.$db_key.'_weight'];
		$deck_accuracy_200    = ($SHIP_2['ship_'.$db_key.'_acc_short'] > 100) ? 100 : $SHIP_2['ship_'.$db_key.'_acc_short'];
		$deck_accuracy_400    = ($SHIP_2['ship_'.$db_key.'_acc_long'] > 100) ? 100 : $SHIP_2['ship_'.$db_key.'_acc_long'];
		$deck_max_damage      = $SHIP_2['ship_'.$db_key.'_number'] * $SHIP_2['ship_'.$db_key.'_dmg'];
		$deck_damage_200      = ($deck_accuracy_200 / 100) * $deck_max_damage;
		$deck_damage_400      = ($deck_accuracy_400 / 100) * $deck_max_damage;
		$deck_reload          = $SHIP_2['ship_'.$db_key.'_reload'];
		$deck_dps_200         = ($deck_reload > 0) ? $deck_damage_200 / $deck_reload : 0;
		$deck_dps_400         = ($deck_reload > 0) ? $deck_damage_400 / $deck_reload : 0;
		$deck_range           = $SHIP_1['ship_'.$db_key.'_range'];

		$s2_broadside_guns += $deck_number;
		$s2_broadside_weight += $deck_weight / 2;
		$s2_max_damage += $deck_max_damage / 2;
		$s2_damage_200 += $deck_damage_200 / 2;
		$s2_damage_400 += $deck_damage_400 / 2;
		$s2_dps_200 += $deck_dps_200 / 2;
		$s2_dps_400 += $deck_dps_400 / 2;
		$s2_max_range = ($deck_range > $s2_max_range) ? $deck_range : $s2_max_range;
		}
	}

	?>
	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>
		<tr>
		<td width='30%'class='thead'>Total Guns</td>
		<td width='27.5%'><?php echo number_format($s1_broadside_guns,0)." (".number_format($s1_broadside_guns/2,0)." / side)"; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_broadside_guns,0)." (".number_format($s2_broadside_guns/2,0)." / side)" : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_broadside_guns,@$s2_broadside_guns); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>Broadside Weight</td>
		<td width='27.5%'><?php echo number_format($s1_broadside_weight,1)." lbs" ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_broadside_weight,1)." lbs" : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_broadside_weight,@$s2_broadside_weight); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>Max Range</td>
		<td width='27.5%'><?php echo number_format($s1_max_range,1)." yds"; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_max_range,1)." yds" : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_max_range,@$s2_max_range); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>Max Damage / Broadside</td>
		<td width='27.5%'><?php echo number_format($s1_max_damage,1) ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_max_damage,1) : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_max_damage,@$s2_max_damage); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>Damage, 200yds</td>
		<td width='27.5%'><?php echo number_format($s1_damage_200,1) ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_damage_200,1) : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_damage_200,@$s2_damage_200); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>DPS, 200yds</td>
		<td width='27.5%'><?php echo number_format($s1_dps_200,1) ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_dps_200,1) : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_dps_200,@$s2_dps_200); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>Damage, 400yds</td>
		<td width='27.5%'><?php echo number_format($s1_damage_400,1) ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_damage_400,1) : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_damage_400,@$s2_damage_400); ?></td>
		</tr>
		<tr>
		<td width='30%'class='thead'>DPS, 400yds</td>
		<td width='27.5%'><?php echo number_format($s1_dps_400,1) ; ?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? number_format($s2_dps_400,1) : "&nbsp;"; ?></td>
		<td width='15%'><?php echo percentageCompare($s1_dps_400,@$s2_dps_400); ?></td>
		</tr>
	</table>


	<?php
		//individual decks - redo the array with bow/aft/swivels in it
		$GUN_DECKS = array("topdeck"=>"Top Deck", "upper"=>"Upper Deck", "mid"=>"Middle Deck", "gundeck"=>"Gun Deck", "bow"=>"Bow Chasers", "aft"=>"Stern Chasers", "swivel"=>"Swivel Guns");
		foreach($GUN_DECKS as $db_key=>$title) {
	?>

	<h4><?php echo $title; ?></h4>
	<table class='plain' style='width: 100%; margin: 0px 0px 10px 0px; border: 1px solid #efb168; '>
		<tr>
		<td width='30%'class='thead'>Guns per side</td>
		<td width='27.5%'><?php echo ($SHIP_1['ship_'.$db_key.'_number']/2)." x ".$SHIP_1['ship_'.$db_key.'_weight']." lbs";?></td>
		<td width='27.5%'><?php echo isset($SHIP_2) ? (@$SHIP_2['ship_'.$db_key.'_number']/2)." x ".$SHIP_2['ship_'.$db_key.'_weight']." lbs" : ""; ?></td>
		<td width='15%'>--</td>
		</tr>

		<tr>
		<?php
		$s1_tot_weight = ($SHIP_1['ship_'.$db_key.'_number'] * $SHIP_1['ship_'.$db_key.'_weight']) / 2;
		if (isset($SHIP_2)) {
			@$s2_tot_weight = ($SHIP_2['ship_'.$db_key.'_number'] * $SHIP_2['ship_'.$db_key.'_weight']) / 2;
		}
		?>
		<td class='thead'>Broadside Weight</td>
		<td><?php echo number_format($s1_tot_weight,1)." lbs";?></td>
		<td><?php echo isset($SHIP_2) ? number_format(@$s2_tot_weight,1)." lbs" : "&nbsp;";?></td>
		<td><?php echo percentageCompare($s1_tot_weight,@$s2_tot_weight); ?></td>
		</tr>

		<tr>
		<td class='thead'>Range</td>
		<td><?php echo $SHIP_1['ship_'.$db_key.'_range']." yds";?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_'.$db_key.'_range']." yds" : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_'.$db_key.'_range'],@$SHIP_2['ship_'.$db_key.'_range']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Damage/Gun</td>
		<td><?php echo $SHIP_1['ship_'.$db_key.'_dmg'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_'.$db_key.'_dmg'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_'.$db_key.'_dmg'],@$SHIP_2['ship_'.$db_key.'_dmg']); ?></td>
		</tr>

		<tr>
		<td class='thead'>Reload</td>
		<td><?php echo $SHIP_1['ship_'.$db_key.'_reload']." secs";?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_'.$db_key.'_reload']." secs" : "&nbsp;";?></td>
		<td><?php echo percentageCompare(@$SHIP_2['ship_'.$db_key.'_reload'], $SHIP_1['ship_'.$db_key.'_reload']); ?></td>
		</tr>

		<tr>
		<?php
		$s1_max_damage = $SHIP_1['ship_'.$db_key.'_dmg'] * ($SHIP_1['ship_'.$db_key.'_number'] / 2);
		if (isset($SHIP_2)) {
			@$s2_max_damage = $SHIP_2['ship_'.$db_key.'_dmg'] * (@$SHIP_2['ship_'.$db_key.'_number'] / 2);
		}
		?>
		<td class='thead'>Max Damage / Broadside</td>
		<td><?php echo number_format($s1_max_damage,1);?></td>
		<td><?php echo isset($SHIP_2) ? number_format(@$s2_max_damage,1) : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($s1_max_damage, @$s2_max_damage); ?></td>
		</tr>

		<tr>
		<td class='thead'>Accuracy, 200yds</td>
		<td><?php echo $SHIP_1['ship_'.$db_key.'_acc_short'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_'.$db_key.'_acc_short'] : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_'.$db_key.'_acc_short'],@$SHIP_2['ship_'.$db_key.'_acc_short']); ?></td>
		</tr>

		<tr>
		<?php
		$s1_accuracy_200 = ($SHIP_1['ship_'.$db_key.'_acc_short'] > 100) ? 100 : $SHIP_1['ship_'.$db_key.'_acc_short'];
		$s1_damage_200 = ($s1_accuracy_200 / 100) * $s1_max_damage;

		if (isset($SHIP_2)) {
			$s2_accuracy_200 = (@$SHIP_2['ship_'.$db_key.'_acc_short'] > 100) ? 100 : $SHIP_2['ship_'.$db_key.'_acc_short'];
			$s2_damage_200 = (@$s2_accuracy_200 / 100) * @$s2_max_damage;
		}
		?>
		<td class='thead'>Damage, 200yds</td>
		<td><?php echo $s1_damage_200;?></td>
		<td><?php echo isset($s2_damage_200) ? @$s2_damage_200 : "&nbsp;"; ?></td>
		<td><?php echo percentageCompare($s1_damage_200, @$s2_damage_200); ?></td>
		</tr>

		<tr>
		<?php
		$s1_dps_200 = ($SHIP_1['ship_'.$db_key.'_reload'] > 0) ? $s1_damage_200 / $SHIP_1['ship_'.$db_key.'_reload'] : 0;

		if (isset($SHIP_2)) {
			$s2_dps_200 = ($SHIP_2['ship_'.$db_key.'_reload'] > 0) ? @$s2_damage_200 / $SHIP_2['ship_'.$db_key.'_reload'] : 0;
		}
		?>
		<td class='thead'>DPS, 200yds</td>
		<td><?php echo number_format($s1_dps_200,2);?></td>
		<td><?php echo isset($s2_dps_200) ? number_format(@$s2_dps_200,2) : "&nbsp;";?></td>
		<td><?php echo percentageCompare($s1_dps_200, @$s2_dps_200); ?></td>
		</tr>

		<tr>
		<td class='thead'>Accuracy, 400yds</td>
		<td><?php echo $SHIP_1['ship_'.$db_key.'_acc_long'];?></td>
		<td><?php echo isset($SHIP_2) ? @$SHIP_2['ship_'.$db_key.'_acc_long'] : "&nbsp;";?></td>
		<td><?php echo percentageCompare($SHIP_1['ship_'.$db_key.'_acc_long'],@$SHIP_2['ship_'.$db_key.'_acc_long']); ?></td>
		</tr>

		<tr>
		<?php
		$s1_accuracy_400 = ($SHIP_1['ship_'.$db_key.'_acc_long'] > 100) ? 100 : $SHIP_1['ship_'.$db_key.'_acc_long'];
		$s1_damage_400 = ($s1_accuracy_400 / 100) * $s1_max_damage;

		if (isset($SHIP_2)) {
			$s2_accuracy_400 = (@$SHIP_2['ship_'.$db_key.'_acc_long'] > 100) ? 100 : $SHIP_2['ship_'.$db_key.'_acc_long'];
			$s2_damage_400 = (@$s2_accuracy_400 / 100) * @$s2_max_damage;
		}
		?>
		<td class='thead'>Damage, 400yds</td>
		<td><?php echo $s1_damage_400;?></td>
		<td><?php echo isset($SHIP_2) ? @$s2_damage_400 : "&nbsp;";?></td>
		<td><?php echo percentageCompare($s1_damage_400, @$s2_damage_400); ?></td>
		</tr>

		<tr>
		<?php
		$s1_dps_400 = ($SHIP_1['ship_'.$db_key.'_reload'] > 0) ? $s1_damage_400 / $SHIP_1['ship_'.$db_key.'_reload'] : 0;

		if (isset($SHIP_2)) {
			$s2_dps_400 = ($SHIP_2['ship_'.$db_key.'_reload'] > 9) ? @$s2_damage_400 / $SHIP_2['ship_'.$db_key.'_reload'] : 0;
		}
		?>
		<td class='thead'>DPS, 400yds</td>
		<td><?php echo number_format($s1_dps_400,2);?></td>
		<td><?php echo isset($SHIP_2) ? number_format(@$s2_dps_400,2) : "&nbsp;";?></td>
		<td><?php echo percentageCompare($s1_dps_400, @$s2_dps_400); ?></td>
		</tr>
	</table>

	<?php
	}
	?>


</div>
<?php
require_once(DOC_ROOT . "/includes/footer.php");
?>
