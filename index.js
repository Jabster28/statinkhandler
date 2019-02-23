const weaponmap = module.exports.weaponmap = {
	        "Splattershot Jr.": "wakaba",
	        "Custom Splattershot Jr.": "momiji",
	        "Splattershot": "sshooter",
	        "Tentatek Splattershot": "sshooter_collabo",
	        "Hero Shot Replica": "heroshooter_replica",
	        "Octoshot Replica": "octoshooter_replica",
	        "Wasabi Splattershot": "sshooter_wasabi",
	        "Splattershot Pro": "prime",
	        "Forge Splattershot Pro": "prime_collabo",
	        "Berry Splattershot Pro": "prime_berry",
	        ".52 Gal": "52gal",
	        ".52 Gal Deco": "52gal_deco",
	        ".96 Gal": "96gal",
	        ".96 Gal Deco": "96gal_deco",
	        "Aerospray MG": "promodeler_mg",
	        "Aerospray RG": "promodeler_rg",
	        "Aerospray PG": "promodeler_pg",
	        "N-ZAP '85": "nzap85",
	        "N-ZAP '89": "nzap89",
	        "N-ZAP '83": "nzap83",
	        "Splash-o-matic": "sharp",
	        "Neo Splash-o-matic": "sharp_neo",
	        "Sploosh-o-matic": "bold",
	        "Neo Sploosh-o-matic": "bold_neo",
	        "Sploosh-o-matic 7": "bold_7",
	        "Jet Squelcher": "jetsweeper",
	        "Custom Jet Squelcher": "jetsweeper_custom",
	        "Dual Squelcher": "dualsweeper",
	        "Custom Dual Squelcher": "dualsweeper_custom",
	        "L-3 Nozzlenose": "l3reelgun",
	        "L-3 Nozzlenose D": "l3reelgun_d",
	        "H-3 Nozzlenose": "h3reelgun",
	        "H-3 Nozzlenose D": "h3reelgun_d",
	        "Cherry H-3 Nozzlenose": "h3reelgun_cherry",
	        "Blaster": "hotblaster",
	        "Custom Blaster": "hotblaster_custom",
	        "Luna Blaster": "nova",
	        "Luna Blaster Neo": "nova_neo",
	        "Range Blaster": "longblaster",
	        "Custom Range Blaster": "longblaster_custom",
	        "Grim Range Blaster": "longblaster_necro",
	        "Rapid Blaster": "rapid",
	        "Rapid Blaster Deco": "raoid_deco",
	        "Rapid Blaster Pro": "rapid_elite",
	        "Rapid Blaster Pro Deco": "rapid_elite_deco",
	        "Classic Squiffer": "squiclean_a",
	        "New Squiffer": "squiclean_b",
	        "Fresh Squiffer": "squiclean_g",
	        "Splat Charger": "splatcharger",
	        "Kelp Splat Charger": "splatcharger_wakame",
	        "Hero Charger Replica": "herocharger_replica",
	        "Bento Splat Charger": "splatcharger_bento",
	        "Splatterscope": "splatscope",
	        "Kelp Splatterscope": "splatscope_wakame",
	        "Bento Splatterscope": "splatscope_bento",
	        "E-liter 3K": "liter3k",
	        "Custom E-liter 3K": "liter3k_custom",
	        "E-liter 3K Scope": "liter3k_scope",
	        "Custom E-liter 3K Scope": "liter3k_custom_scope",
	        "Bamboozler 14 Mk I": "bamboo14mk1",
	        "Bamboozler 14 Mk II": "bamboo14mk2",
	        "Bamboozler 14 Mk III": "bambo14mk3",
	        "Carbon Roller": "carbon",
	        "Carbon Roller Deco": "carbon_deco",
	        "Splat Roller": "splatroller",
	        "Krak-On Splat Roller": "splatroller_collabo",
	        "Hero Roller Replica": "heroroller_replica",
	        "CoroCoro Splat Roller": "splatroller_corocoro",
	        "Dynamo Roller": "dynamo",
	        "Gold Dynamo Roller": "dynamo_tesla",
	        "Tempered Dynamo Roller": "dynamo_burned",
	        "Inkbrush": "pablo",
	        "Inkbrush Nouveau": "pablo_hue",
	        "Permanent Inkbrush": "pablo_pernament",
	        "Octobrush": "hokusai",
	        "Octobrush Nouveau": "hokusai_hue",
	        "Slosher": "bucketslosher",
	        "Slosher Deco": "bucketslosher_deco",
	        "Soda Slosher": "bucketslosher_soda",
	        "Tri-Slosher": "hissen",
	        "Tri-Slosher Nouveau": "hissen_hue",
	        "Sloshing Machine": "screwslosher",
	        "Sloshing Machine Neo": "screwslosher_neo",
	        "Mini Splatling": "splatspinner",
	        "Zink Mini Splatling": "splatspinner_collabo",
	        "Refurbished Mini Splatling": "splatspinner_repair",
	        "Heavy Splatling": "barrelspinner",
	        "Heavy Splatling Deco": "barrelspinner_deco",
	        "Heavy Splatling Remix": "barrelspinner_remix",
	        "Hydra Splatling": "hydra",
	        "Custom Hydra Splatling": "hydra_custom"
}
exports.getAllWeapons = function ()  {
	  return Object.keys(weaponmap);
}
exports.getBattles = function (token) {
	    $.ajax({
		        type: "GET",
		        apikey: token,
		        url: "/api/v1/battle",
		                        crossDomain: true,
		                    success: function (data) {
					                      return data
					                    },
		                    error: function (error) {
					                        console.log(error)
					                        if (error.responseJSON) {
									                        console.log(error.responseJSON)
									                        if (error.responseJSON.error.apikey)
										                            console.log("Invalid API Key!")
									                    }
					                    }
		      })
}
exports.postBattle = function(obj) {
	              $.ajax({
			                      type: "POST",
			                         beforeSend: function(request) {
							                      M.toast({html: 'Sending...'})
							                    },
			                      url: "https://stat.ink/api/v1/battle",
			                      data: {
						                          "apikey": obj.apikey,
						                          "weapon": weaponmap[obj.weapon],
						                          "result": obj.res,
						                          "agent": "SplatInk",
						                          "agent_version": "1.0.0B",
						                          "map": obj.map,
						                          "mode": obj.mode,
						                          "kill": obj.k,
						                          "test": obj.test,
						                          "death": obj.d,
						                      },
			                      async: true,
			                      crossDomain: true,
			                      success: function (data, status, xhr) {
						                          console.log(data)
						                          console.log(this.data)
						                          M.toast({html: 'Success! <a class="btn-flat toast-action" href="' + data.url + '">Click Here to view</a>'})
						                      },
			                      error: function (error) {
						                        M.toast({html: error.responseText})
						                      }
			                  }
			                         );
}
