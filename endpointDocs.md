## Documentation for API Endpoints

All URIs are relative to *https://esi.evetech.net/latest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EveSwaggerInterface.AllianceApi* | [**getAlliances**](docs/AllianceApi.md#getAlliances) | **GET** /alliances/ | List all alliances
*EveSwaggerInterface.AllianceApi* | [**getAlliancesAllianceId**](docs/AllianceApi.md#getAlliancesAllianceId) | **GET** /alliances/{alliance_id}/ | Get alliance information
*EveSwaggerInterface.AllianceApi* | [**getAlliancesAllianceIdCorporations**](docs/AllianceApi.md#getAlliancesAllianceIdCorporations) | **GET** /alliances/{alliance_id}/corporations/ | List alliance's corporations
*EveSwaggerInterface.AllianceApi* | [**getAlliancesAllianceIdIcons**](docs/AllianceApi.md#getAlliancesAllianceIdIcons) | **GET** /alliances/{alliance_id}/icons/ | Get alliance icon
*EveSwaggerInterface.AssetsApi* | [**getCharactersCharacterIdAssets**](docs/AssetsApi.md#getCharactersCharacterIdAssets) | **GET** /characters/{character_id}/assets/ | Get character assets
*EveSwaggerInterface.AssetsApi* | [**getCorporationsCorporationIdAssets**](docs/AssetsApi.md#getCorporationsCorporationIdAssets) | **GET** /corporations/{corporation_id}/assets/ | Get corporation assets
*EveSwaggerInterface.AssetsApi* | [**postCharactersCharacterIdAssetsLocations**](docs/AssetsApi.md#postCharactersCharacterIdAssetsLocations) | **POST** /characters/{character_id}/assets/locations/ | Get character asset locations
*EveSwaggerInterface.AssetsApi* | [**postCharactersCharacterIdAssetsNames**](docs/AssetsApi.md#postCharactersCharacterIdAssetsNames) | **POST** /characters/{character_id}/assets/names/ | Get character asset names
*EveSwaggerInterface.AssetsApi* | [**postCorporationsCorporationIdAssetsLocations**](docs/AssetsApi.md#postCorporationsCorporationIdAssetsLocations) | **POST** /corporations/{corporation_id}/assets/locations/ | Get corporation asset locations
*EveSwaggerInterface.AssetsApi* | [**postCorporationsCorporationIdAssetsNames**](docs/AssetsApi.md#postCorporationsCorporationIdAssetsNames) | **POST** /corporations/{corporation_id}/assets/names/ | Get corporation asset names
*EveSwaggerInterface.BookmarksApi* | [**getCharactersCharacterIdBookmarks**](docs/BookmarksApi.md#getCharactersCharacterIdBookmarks) | **GET** /characters/{character_id}/bookmarks/ | List bookmarks
*EveSwaggerInterface.BookmarksApi* | [**getCharactersCharacterIdBookmarksFolders**](docs/BookmarksApi.md#getCharactersCharacterIdBookmarksFolders) | **GET** /characters/{character_id}/bookmarks/folders/ | List bookmark folders
*EveSwaggerInterface.BookmarksApi* | [**getCorporationsCorporationIdBookmarks**](docs/BookmarksApi.md#getCorporationsCorporationIdBookmarks) | **GET** /corporations/{corporation_id}/bookmarks/ | List corporation bookmarks
*EveSwaggerInterface.BookmarksApi* | [**getCorporationsCorporationIdBookmarksFolders**](docs/BookmarksApi.md#getCorporationsCorporationIdBookmarksFolders) | **GET** /corporations/{corporation_id}/bookmarks/folders/ | List corporation bookmark folders
*EveSwaggerInterface.CalendarApi* | [**getCharactersCharacterIdCalendar**](docs/CalendarApi.md#getCharactersCharacterIdCalendar) | **GET** /characters/{character_id}/calendar/ | List calendar event summaries
*EveSwaggerInterface.CalendarApi* | [**getCharactersCharacterIdCalendarEventId**](docs/CalendarApi.md#getCharactersCharacterIdCalendarEventId) | **GET** /characters/{character_id}/calendar/{event_id}/ | Get an event
*EveSwaggerInterface.CalendarApi* | [**getCharactersCharacterIdCalendarEventIdAttendees**](docs/CalendarApi.md#getCharactersCharacterIdCalendarEventIdAttendees) | **GET** /characters/{character_id}/calendar/{event_id}/attendees/ | Get attendees
*EveSwaggerInterface.CalendarApi* | [**putCharactersCharacterIdCalendarEventId**](docs/CalendarApi.md#putCharactersCharacterIdCalendarEventId) | **PUT** /characters/{character_id}/calendar/{event_id}/ | Respond to an event
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterId**](docs/CharacterApi.md#getCharactersCharacterId) | **GET** /characters/{character_id}/ | Get character's public information
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdAgentsResearch**](docs/CharacterApi.md#getCharactersCharacterIdAgentsResearch) | **GET** /characters/{character_id}/agents_research/ | Get agents research
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdBlueprints**](docs/CharacterApi.md#getCharactersCharacterIdBlueprints) | **GET** /characters/{character_id}/blueprints/ | Get blueprints
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdCorporationhistory**](docs/CharacterApi.md#getCharactersCharacterIdCorporationhistory) | **GET** /characters/{character_id}/corporationhistory/ | Get corporation history
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdFatigue**](docs/CharacterApi.md#getCharactersCharacterIdFatigue) | **GET** /characters/{character_id}/fatigue/ | Get jump fatigue
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdMedals**](docs/CharacterApi.md#getCharactersCharacterIdMedals) | **GET** /characters/{character_id}/medals/ | Get medals
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdNotifications**](docs/CharacterApi.md#getCharactersCharacterIdNotifications) | **GET** /characters/{character_id}/notifications/ | Get character notifications
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdNotificationsContacts**](docs/CharacterApi.md#getCharactersCharacterIdNotificationsContacts) | **GET** /characters/{character_id}/notifications/contacts/ | Get new contact notifications
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdPortrait**](docs/CharacterApi.md#getCharactersCharacterIdPortrait) | **GET** /characters/{character_id}/portrait/ | Get character portraits
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdRoles**](docs/CharacterApi.md#getCharactersCharacterIdRoles) | **GET** /characters/{character_id}/roles/ | Get character corporation roles
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdStandings**](docs/CharacterApi.md#getCharactersCharacterIdStandings) | **GET** /characters/{character_id}/standings/ | Get standings
*EveSwaggerInterface.CharacterApi* | [**getCharactersCharacterIdTitles**](docs/CharacterApi.md#getCharactersCharacterIdTitles) | **GET** /characters/{character_id}/titles/ | Get character corporation titles
*EveSwaggerInterface.CharacterApi* | [**postCharactersAffiliation**](docs/CharacterApi.md#postCharactersAffiliation) | **POST** /characters/affiliation/ | Character affiliation
*EveSwaggerInterface.CharacterApi* | [**postCharactersCharacterIdCspa**](docs/CharacterApi.md#postCharactersCharacterIdCspa) | **POST** /characters/{character_id}/cspa/ | Calculate a CSPA charge cost
*EveSwaggerInterface.ClonesApi* | [**getCharactersCharacterIdClones**](docs/ClonesApi.md#getCharactersCharacterIdClones) | **GET** /characters/{character_id}/clones/ | Get clones
*EveSwaggerInterface.ClonesApi* | [**getCharactersCharacterIdImplants**](docs/ClonesApi.md#getCharactersCharacterIdImplants) | **GET** /characters/{character_id}/implants/ | Get active implants
*EveSwaggerInterface.ContactsApi* | [**deleteCharactersCharacterIdContacts**](docs/ContactsApi.md#deleteCharactersCharacterIdContacts) | **DELETE** /characters/{character_id}/contacts/ | Delete contacts
*EveSwaggerInterface.ContactsApi* | [**getAlliancesAllianceIdContacts**](docs/ContactsApi.md#getAlliancesAllianceIdContacts) | **GET** /alliances/{alliance_id}/contacts/ | Get alliance contacts
*EveSwaggerInterface.ContactsApi* | [**getAlliancesAllianceIdContactsLabels**](docs/ContactsApi.md#getAlliancesAllianceIdContactsLabels) | **GET** /alliances/{alliance_id}/contacts/labels/ | Get alliance contact labels
*EveSwaggerInterface.ContactsApi* | [**getCharactersCharacterIdContacts**](docs/ContactsApi.md#getCharactersCharacterIdContacts) | **GET** /characters/{character_id}/contacts/ | Get contacts
*EveSwaggerInterface.ContactsApi* | [**getCharactersCharacterIdContactsLabels**](docs/ContactsApi.md#getCharactersCharacterIdContactsLabels) | **GET** /characters/{character_id}/contacts/labels/ | Get contact labels
*EveSwaggerInterface.ContactsApi* | [**getCorporationsCorporationIdContacts**](docs/ContactsApi.md#getCorporationsCorporationIdContacts) | **GET** /corporations/{corporation_id}/contacts/ | Get corporation contacts
*EveSwaggerInterface.ContactsApi* | [**getCorporationsCorporationIdContactsLabels**](docs/ContactsApi.md#getCorporationsCorporationIdContactsLabels) | **GET** /corporations/{corporation_id}/contacts/labels/ | Get corporation contact labels
*EveSwaggerInterface.ContactsApi* | [**postCharactersCharacterIdContacts**](docs/ContactsApi.md#postCharactersCharacterIdContacts) | **POST** /characters/{character_id}/contacts/ | Add contacts
*EveSwaggerInterface.ContactsApi* | [**putCharactersCharacterIdContacts**](docs/ContactsApi.md#putCharactersCharacterIdContacts) | **PUT** /characters/{character_id}/contacts/ | Edit contacts
*EveSwaggerInterface.ContractsApi* | [**getCharactersCharacterIdContracts**](docs/ContractsApi.md#getCharactersCharacterIdContracts) | **GET** /characters/{character_id}/contracts/ | Get contracts
*EveSwaggerInterface.ContractsApi* | [**getCharactersCharacterIdContractsContractIdBids**](docs/ContractsApi.md#getCharactersCharacterIdContractsContractIdBids) | **GET** /characters/{character_id}/contracts/{contract_id}/bids/ | Get contract bids
*EveSwaggerInterface.ContractsApi* | [**getCharactersCharacterIdContractsContractIdItems**](docs/ContractsApi.md#getCharactersCharacterIdContractsContractIdItems) | **GET** /characters/{character_id}/contracts/{contract_id}/items/ | Get contract items
*EveSwaggerInterface.ContractsApi* | [**getContractsPublicBidsContractId**](docs/ContractsApi.md#getContractsPublicBidsContractId) | **GET** /contracts/public/bids/{contract_id}/ | Get public contract bids
*EveSwaggerInterface.ContractsApi* | [**getContractsPublicItemsContractId**](docs/ContractsApi.md#getContractsPublicItemsContractId) | **GET** /contracts/public/items/{contract_id}/ | Get public contract items
*EveSwaggerInterface.ContractsApi* | [**getContractsPublicRegionId**](docs/ContractsApi.md#getContractsPublicRegionId) | **GET** /contracts/public/{region_id}/ | Get public contracts
*EveSwaggerInterface.ContractsApi* | [**getCorporationsCorporationIdContracts**](docs/ContractsApi.md#getCorporationsCorporationIdContracts) | **GET** /corporations/{corporation_id}/contracts/ | Get corporation contracts
*EveSwaggerInterface.ContractsApi* | [**getCorporationsCorporationIdContractsContractIdBids**](docs/ContractsApi.md#getCorporationsCorporationIdContractsContractIdBids) | **GET** /corporations/{corporation_id}/contracts/{contract_id}/bids/ | Get corporation contract bids
*EveSwaggerInterface.ContractsApi* | [**getCorporationsCorporationIdContractsContractIdItems**](docs/ContractsApi.md#getCorporationsCorporationIdContractsContractIdItems) | **GET** /corporations/{corporation_id}/contracts/{contract_id}/items/ | Get corporation contract items
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationId**](docs/CorporationApi.md#getCorporationsCorporationId) | **GET** /corporations/{corporation_id}/ | Get corporation information
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdAlliancehistory**](docs/CorporationApi.md#getCorporationsCorporationIdAlliancehistory) | **GET** /corporations/{corporation_id}/alliancehistory/ | Get alliance history
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdBlueprints**](docs/CorporationApi.md#getCorporationsCorporationIdBlueprints) | **GET** /corporations/{corporation_id}/blueprints/ | Get corporation blueprints
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdContainersLogs**](docs/CorporationApi.md#getCorporationsCorporationIdContainersLogs) | **GET** /corporations/{corporation_id}/containers/logs/ | Get all corporation ALSC logs
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdDivisions**](docs/CorporationApi.md#getCorporationsCorporationIdDivisions) | **GET** /corporations/{corporation_id}/divisions/ | Get corporation divisions
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdFacilities**](docs/CorporationApi.md#getCorporationsCorporationIdFacilities) | **GET** /corporations/{corporation_id}/facilities/ | Get corporation facilities
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdIcons**](docs/CorporationApi.md#getCorporationsCorporationIdIcons) | **GET** /corporations/{corporation_id}/icons/ | Get corporation icon
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMedals**](docs/CorporationApi.md#getCorporationsCorporationIdMedals) | **GET** /corporations/{corporation_id}/medals/ | Get corporation medals
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMedalsIssued**](docs/CorporationApi.md#getCorporationsCorporationIdMedalsIssued) | **GET** /corporations/{corporation_id}/medals/issued/ | Get corporation issued medals
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMembers**](docs/CorporationApi.md#getCorporationsCorporationIdMembers) | **GET** /corporations/{corporation_id}/members/ | Get corporation members
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMembersLimit**](docs/CorporationApi.md#getCorporationsCorporationIdMembersLimit) | **GET** /corporations/{corporation_id}/members/limit/ | Get corporation member limit
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMembersTitles**](docs/CorporationApi.md#getCorporationsCorporationIdMembersTitles) | **GET** /corporations/{corporation_id}/members/titles/ | Get corporation's members' titles
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdMembertracking**](docs/CorporationApi.md#getCorporationsCorporationIdMembertracking) | **GET** /corporations/{corporation_id}/membertracking/ | Track corporation members
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdRoles**](docs/CorporationApi.md#getCorporationsCorporationIdRoles) | **GET** /corporations/{corporation_id}/roles/ | Get corporation member roles
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdRolesHistory**](docs/CorporationApi.md#getCorporationsCorporationIdRolesHistory) | **GET** /corporations/{corporation_id}/roles/history/ | Get corporation member roles history
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdShareholders**](docs/CorporationApi.md#getCorporationsCorporationIdShareholders) | **GET** /corporations/{corporation_id}/shareholders/ | Get corporation shareholders
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdStandings**](docs/CorporationApi.md#getCorporationsCorporationIdStandings) | **GET** /corporations/{corporation_id}/standings/ | Get corporation standings
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdStarbases**](docs/CorporationApi.md#getCorporationsCorporationIdStarbases) | **GET** /corporations/{corporation_id}/starbases/ | Get corporation starbases (POSes)
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdStarbasesStarbaseId**](docs/CorporationApi.md#getCorporationsCorporationIdStarbasesStarbaseId) | **GET** /corporations/{corporation_id}/starbases/{starbase_id}/ | Get starbase (POS) detail
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdStructures**](docs/CorporationApi.md#getCorporationsCorporationIdStructures) | **GET** /corporations/{corporation_id}/structures/ | Get corporation structures
*EveSwaggerInterface.CorporationApi* | [**getCorporationsCorporationIdTitles**](docs/CorporationApi.md#getCorporationsCorporationIdTitles) | **GET** /corporations/{corporation_id}/titles/ | Get corporation titles
*EveSwaggerInterface.CorporationApi* | [**getCorporationsNpccorps**](docs/CorporationApi.md#getCorporationsNpccorps) | **GET** /corporations/npccorps/ | Get npc corporations
*EveSwaggerInterface.DogmaApi* | [**getDogmaAttributes**](docs/DogmaApi.md#getDogmaAttributes) | **GET** /dogma/attributes/ | Get attributes
*EveSwaggerInterface.DogmaApi* | [**getDogmaAttributesAttributeId**](docs/DogmaApi.md#getDogmaAttributesAttributeId) | **GET** /dogma/attributes/{attribute_id}/ | Get attribute information
*EveSwaggerInterface.DogmaApi* | [**getDogmaDynamicItemsTypeIdItemId**](docs/DogmaApi.md#getDogmaDynamicItemsTypeIdItemId) | **GET** /dogma/dynamic/items/{type_id}/{item_id}/ | Get dynamic item information
*EveSwaggerInterface.DogmaApi* | [**getDogmaEffects**](docs/DogmaApi.md#getDogmaEffects) | **GET** /dogma/effects/ | Get effects
*EveSwaggerInterface.DogmaApi* | [**getDogmaEffectsEffectId**](docs/DogmaApi.md#getDogmaEffectsEffectId) | **GET** /dogma/effects/{effect_id}/ | Get effect information
*EveSwaggerInterface.FactionWarfareApi* | [**getCharactersCharacterIdFwStats**](docs/FactionWarfareApi.md#getCharactersCharacterIdFwStats) | **GET** /characters/{character_id}/fw/stats/ | Overview of a character involved in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getCorporationsCorporationIdFwStats**](docs/FactionWarfareApi.md#getCorporationsCorporationIdFwStats) | **GET** /corporations/{corporation_id}/fw/stats/ | Overview of a corporation involved in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getFwLeaderboards**](docs/FactionWarfareApi.md#getFwLeaderboards) | **GET** /fw/leaderboards/ | List of the top factions in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getFwLeaderboardsCharacters**](docs/FactionWarfareApi.md#getFwLeaderboardsCharacters) | **GET** /fw/leaderboards/characters/ | List of the top pilots in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getFwLeaderboardsCorporations**](docs/FactionWarfareApi.md#getFwLeaderboardsCorporations) | **GET** /fw/leaderboards/corporations/ | List of the top corporations in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getFwStats**](docs/FactionWarfareApi.md#getFwStats) | **GET** /fw/stats/ | An overview of statistics about factions involved in faction warfare
*EveSwaggerInterface.FactionWarfareApi* | [**getFwSystems**](docs/FactionWarfareApi.md#getFwSystems) | **GET** /fw/systems/ | Ownership of faction warfare systems
*EveSwaggerInterface.FactionWarfareApi* | [**getFwWars**](docs/FactionWarfareApi.md#getFwWars) | **GET** /fw/wars/ | Data about which NPC factions are at war
*EveSwaggerInterface.FittingsApi* | [**deleteCharactersCharacterIdFittingsFittingId**](docs/FittingsApi.md#deleteCharactersCharacterIdFittingsFittingId) | **DELETE** /characters/{character_id}/fittings/{fitting_id}/ | Delete fitting
*EveSwaggerInterface.FittingsApi* | [**getCharactersCharacterIdFittings**](docs/FittingsApi.md#getCharactersCharacterIdFittings) | **GET** /characters/{character_id}/fittings/ | Get fittings
*EveSwaggerInterface.FittingsApi* | [**postCharactersCharacterIdFittings**](docs/FittingsApi.md#postCharactersCharacterIdFittings) | **POST** /characters/{character_id}/fittings/ | Create fitting
*EveSwaggerInterface.FleetsApi* | [**deleteFleetsFleetIdMembersMemberId**](docs/FleetsApi.md#deleteFleetsFleetIdMembersMemberId) | **DELETE** /fleets/{fleet_id}/members/{member_id}/ | Kick fleet member
*EveSwaggerInterface.FleetsApi* | [**deleteFleetsFleetIdSquadsSquadId**](docs/FleetsApi.md#deleteFleetsFleetIdSquadsSquadId) | **DELETE** /fleets/{fleet_id}/squads/{squad_id}/ | Delete fleet squad
*EveSwaggerInterface.FleetsApi* | [**deleteFleetsFleetIdWingsWingId**](docs/FleetsApi.md#deleteFleetsFleetIdWingsWingId) | **DELETE** /fleets/{fleet_id}/wings/{wing_id}/ | Delete fleet wing
*EveSwaggerInterface.FleetsApi* | [**getCharactersCharacterIdFleet**](docs/FleetsApi.md#getCharactersCharacterIdFleet) | **GET** /characters/{character_id}/fleet/ | Get character fleet info
*EveSwaggerInterface.FleetsApi* | [**getFleetsFleetId**](docs/FleetsApi.md#getFleetsFleetId) | **GET** /fleets/{fleet_id}/ | Get fleet information
*EveSwaggerInterface.FleetsApi* | [**getFleetsFleetIdMembers**](docs/FleetsApi.md#getFleetsFleetIdMembers) | **GET** /fleets/{fleet_id}/members/ | Get fleet members
*EveSwaggerInterface.FleetsApi* | [**getFleetsFleetIdWings**](docs/FleetsApi.md#getFleetsFleetIdWings) | **GET** /fleets/{fleet_id}/wings/ | Get fleet wings
*EveSwaggerInterface.FleetsApi* | [**postFleetsFleetIdMembers**](docs/FleetsApi.md#postFleetsFleetIdMembers) | **POST** /fleets/{fleet_id}/members/ | Create fleet invitation
*EveSwaggerInterface.FleetsApi* | [**postFleetsFleetIdWings**](docs/FleetsApi.md#postFleetsFleetIdWings) | **POST** /fleets/{fleet_id}/wings/ | Create fleet wing
*EveSwaggerInterface.FleetsApi* | [**postFleetsFleetIdWingsWingIdSquads**](docs/FleetsApi.md#postFleetsFleetIdWingsWingIdSquads) | **POST** /fleets/{fleet_id}/wings/{wing_id}/squads/ | Create fleet squad
*EveSwaggerInterface.FleetsApi* | [**putFleetsFleetId**](docs/FleetsApi.md#putFleetsFleetId) | **PUT** /fleets/{fleet_id}/ | Update fleet
*EveSwaggerInterface.FleetsApi* | [**putFleetsFleetIdMembersMemberId**](docs/FleetsApi.md#putFleetsFleetIdMembersMemberId) | **PUT** /fleets/{fleet_id}/members/{member_id}/ | Move fleet member
*EveSwaggerInterface.FleetsApi* | [**putFleetsFleetIdSquadsSquadId**](docs/FleetsApi.md#putFleetsFleetIdSquadsSquadId) | **PUT** /fleets/{fleet_id}/squads/{squad_id}/ | Rename fleet squad
*EveSwaggerInterface.FleetsApi* | [**putFleetsFleetIdWingsWingId**](docs/FleetsApi.md#putFleetsFleetIdWingsWingId) | **PUT** /fleets/{fleet_id}/wings/{wing_id}/ | Rename fleet wing
*EveSwaggerInterface.IncursionsApi* | [**getIncursions**](docs/IncursionsApi.md#getIncursions) | **GET** /incursions/ | List incursions
*EveSwaggerInterface.IndustryApi* | [**getCharactersCharacterIdIndustryJobs**](docs/IndustryApi.md#getCharactersCharacterIdIndustryJobs) | **GET** /characters/{character_id}/industry/jobs/ | List character industry jobs
*EveSwaggerInterface.IndustryApi* | [**getCharactersCharacterIdMining**](docs/IndustryApi.md#getCharactersCharacterIdMining) | **GET** /characters/{character_id}/mining/ | Character mining ledger
*EveSwaggerInterface.IndustryApi* | [**getCorporationCorporationIdMiningExtractions**](docs/IndustryApi.md#getCorporationCorporationIdMiningExtractions) | **GET** /corporation/{corporation_id}/mining/extractions/ | Moon extraction timers
*EveSwaggerInterface.IndustryApi* | [**getCorporationCorporationIdMiningObservers**](docs/IndustryApi.md#getCorporationCorporationIdMiningObservers) | **GET** /corporation/{corporation_id}/mining/observers/ | Corporation mining observers
*EveSwaggerInterface.IndustryApi* | [**getCorporationCorporationIdMiningObserversObserverId**](docs/IndustryApi.md#getCorporationCorporationIdMiningObserversObserverId) | **GET** /corporation/{corporation_id}/mining/observers/{observer_id}/ | Observed corporation mining
*EveSwaggerInterface.IndustryApi* | [**getCorporationsCorporationIdIndustryJobs**](docs/IndustryApi.md#getCorporationsCorporationIdIndustryJobs) | **GET** /corporations/{corporation_id}/industry/jobs/ | List corporation industry jobs
*EveSwaggerInterface.IndustryApi* | [**getIndustryFacilities**](docs/IndustryApi.md#getIndustryFacilities) | **GET** /industry/facilities/ | List industry facilities
*EveSwaggerInterface.IndustryApi* | [**getIndustrySystems**](docs/IndustryApi.md#getIndustrySystems) | **GET** /industry/systems/ | List solar system cost indices
*EveSwaggerInterface.InsuranceApi* | [**getInsurancePrices**](docs/InsuranceApi.md#getInsurancePrices) | **GET** /insurance/prices/ | List insurance levels
*EveSwaggerInterface.KillmailsApi* | [**getCharactersCharacterIdKillmailsRecent**](docs/KillmailsApi.md#getCharactersCharacterIdKillmailsRecent) | **GET** /characters/{character_id}/killmails/recent/ | Get a character's recent kills and losses
*EveSwaggerInterface.KillmailsApi* | [**getCorporationsCorporationIdKillmailsRecent**](docs/KillmailsApi.md#getCorporationsCorporationIdKillmailsRecent) | **GET** /corporations/{corporation_id}/killmails/recent/ | Get a corporation's recent kills and losses
*EveSwaggerInterface.KillmailsApi* | [**getKillmailsKillmailIdKillmailHash**](docs/KillmailsApi.md#getKillmailsKillmailIdKillmailHash) | **GET** /killmails/{killmail_id}/{killmail_hash}/ | Get a single killmail
*EveSwaggerInterface.LocationApi* | [**getCharactersCharacterIdLocation**](docs/LocationApi.md#getCharactersCharacterIdLocation) | **GET** /characters/{character_id}/location/ | Get character location
*EveSwaggerInterface.LocationApi* | [**getCharactersCharacterIdOnline**](docs/LocationApi.md#getCharactersCharacterIdOnline) | **GET** /characters/{character_id}/online/ | Get character online
*EveSwaggerInterface.LocationApi* | [**getCharactersCharacterIdShip**](docs/LocationApi.md#getCharactersCharacterIdShip) | **GET** /characters/{character_id}/ship/ | Get current ship
*EveSwaggerInterface.LoyaltyApi* | [**getCharactersCharacterIdLoyaltyPoints**](docs/LoyaltyApi.md#getCharactersCharacterIdLoyaltyPoints) | **GET** /characters/{character_id}/loyalty/points/ | Get loyalty points
*EveSwaggerInterface.LoyaltyApi* | [**getLoyaltyStoresCorporationIdOffers**](docs/LoyaltyApi.md#getLoyaltyStoresCorporationIdOffers) | **GET** /loyalty/stores/{corporation_id}/offers/ | List loyalty store offers
*EveSwaggerInterface.MailApi* | [**deleteCharactersCharacterIdMailLabelsLabelId**](docs/MailApi.md#deleteCharactersCharacterIdMailLabelsLabelId) | **DELETE** /characters/{character_id}/mail/labels/{label_id}/ | Delete a mail label
*EveSwaggerInterface.MailApi* | [**deleteCharactersCharacterIdMailMailId**](docs/MailApi.md#deleteCharactersCharacterIdMailMailId) | **DELETE** /characters/{character_id}/mail/{mail_id}/ | Delete a mail
*EveSwaggerInterface.MailApi* | [**getCharactersCharacterIdMail**](docs/MailApi.md#getCharactersCharacterIdMail) | **GET** /characters/{character_id}/mail/ | Return mail headers
*EveSwaggerInterface.MailApi* | [**getCharactersCharacterIdMailLabels**](docs/MailApi.md#getCharactersCharacterIdMailLabels) | **GET** /characters/{character_id}/mail/labels/ | Get mail labels and unread counts
*EveSwaggerInterface.MailApi* | [**getCharactersCharacterIdMailLists**](docs/MailApi.md#getCharactersCharacterIdMailLists) | **GET** /characters/{character_id}/mail/lists/ | Return mailing list subscriptions
*EveSwaggerInterface.MailApi* | [**getCharactersCharacterIdMailMailId**](docs/MailApi.md#getCharactersCharacterIdMailMailId) | **GET** /characters/{character_id}/mail/{mail_id}/ | Return a mail
*EveSwaggerInterface.MailApi* | [**postCharactersCharacterIdMail**](docs/MailApi.md#postCharactersCharacterIdMail) | **POST** /characters/{character_id}/mail/ | Send a new mail
*EveSwaggerInterface.MailApi* | [**postCharactersCharacterIdMailLabels**](docs/MailApi.md#postCharactersCharacterIdMailLabels) | **POST** /characters/{character_id}/mail/labels/ | Create a mail label
*EveSwaggerInterface.MailApi* | [**putCharactersCharacterIdMailMailId**](docs/MailApi.md#putCharactersCharacterIdMailMailId) | **PUT** /characters/{character_id}/mail/{mail_id}/ | Update metadata about a mail
*EveSwaggerInterface.MarketApi* | [**getCharactersCharacterIdOrders**](docs/MarketApi.md#getCharactersCharacterIdOrders) | **GET** /characters/{character_id}/orders/ | List open orders from a character
*EveSwaggerInterface.MarketApi* | [**getCharactersCharacterIdOrdersHistory**](docs/MarketApi.md#getCharactersCharacterIdOrdersHistory) | **GET** /characters/{character_id}/orders/history/ | List historical orders by a character
*EveSwaggerInterface.MarketApi* | [**getCorporationsCorporationIdOrders**](docs/MarketApi.md#getCorporationsCorporationIdOrders) | **GET** /corporations/{corporation_id}/orders/ | List open orders from a corporation
*EveSwaggerInterface.MarketApi* | [**getCorporationsCorporationIdOrdersHistory**](docs/MarketApi.md#getCorporationsCorporationIdOrdersHistory) | **GET** /corporations/{corporation_id}/orders/history/ | List historical orders from a corporation
*EveSwaggerInterface.MarketApi* | [**getMarketsGroups**](docs/MarketApi.md#getMarketsGroups) | **GET** /markets/groups/ | Get item groups
*EveSwaggerInterface.MarketApi* | [**getMarketsGroupsMarketGroupId**](docs/MarketApi.md#getMarketsGroupsMarketGroupId) | **GET** /markets/groups/{market_group_id}/ | Get item group information
*EveSwaggerInterface.MarketApi* | [**getMarketsPrices**](docs/MarketApi.md#getMarketsPrices) | **GET** /markets/prices/ | List market prices
*EveSwaggerInterface.MarketApi* | [**getMarketsRegionIdHistory**](docs/MarketApi.md#getMarketsRegionIdHistory) | **GET** /markets/{region_id}/history/ | List historical market statistics in a region
*EveSwaggerInterface.MarketApi* | [**getMarketsRegionIdOrders**](docs/MarketApi.md#getMarketsRegionIdOrders) | **GET** /markets/{region_id}/orders/ | List orders in a region
*EveSwaggerInterface.MarketApi* | [**getMarketsRegionIdTypes**](docs/MarketApi.md#getMarketsRegionIdTypes) | **GET** /markets/{region_id}/types/ | List type IDs relevant to a market
*EveSwaggerInterface.MarketApi* | [**getMarketsStructuresStructureId**](docs/MarketApi.md#getMarketsStructuresStructureId) | **GET** /markets/structures/{structure_id}/ | List orders in a structure
*EveSwaggerInterface.OpportunitiesApi* | [**getCharactersCharacterIdOpportunities**](docs/OpportunitiesApi.md#getCharactersCharacterIdOpportunities) | **GET** /characters/{character_id}/opportunities/ | Get a character's completed tasks
*EveSwaggerInterface.OpportunitiesApi* | [**getOpportunitiesGroups**](docs/OpportunitiesApi.md#getOpportunitiesGroups) | **GET** /opportunities/groups/ | Get opportunities groups
*EveSwaggerInterface.OpportunitiesApi* | [**getOpportunitiesGroupsGroupId**](docs/OpportunitiesApi.md#getOpportunitiesGroupsGroupId) | **GET** /opportunities/groups/{group_id}/ | Get opportunities group
*EveSwaggerInterface.OpportunitiesApi* | [**getOpportunitiesTasks**](docs/OpportunitiesApi.md#getOpportunitiesTasks) | **GET** /opportunities/tasks/ | Get opportunities tasks
*EveSwaggerInterface.OpportunitiesApi* | [**getOpportunitiesTasksTaskId**](docs/OpportunitiesApi.md#getOpportunitiesTasksTaskId) | **GET** /opportunities/tasks/{task_id}/ | Get opportunities task
*EveSwaggerInterface.PlanetaryInteractionApi* | [**getCharactersCharacterIdPlanets**](docs/PlanetaryInteractionApi.md#getCharactersCharacterIdPlanets) | **GET** /characters/{character_id}/planets/ | Get colonies
*EveSwaggerInterface.PlanetaryInteractionApi* | [**getCharactersCharacterIdPlanetsPlanetId**](docs/PlanetaryInteractionApi.md#getCharactersCharacterIdPlanetsPlanetId) | **GET** /characters/{character_id}/planets/{planet_id}/ | Get colony layout
*EveSwaggerInterface.PlanetaryInteractionApi* | [**getCorporationsCorporationIdCustomsOffices**](docs/PlanetaryInteractionApi.md#getCorporationsCorporationIdCustomsOffices) | **GET** /corporations/{corporation_id}/customs_offices/ | List corporation customs offices
*EveSwaggerInterface.PlanetaryInteractionApi* | [**getUniverseSchematicsSchematicId**](docs/PlanetaryInteractionApi.md#getUniverseSchematicsSchematicId) | **GET** /universe/schematics/{schematic_id}/ | Get schematic information
*EveSwaggerInterface.RoutesApi* | [**getRouteOriginDestination**](docs/RoutesApi.md#getRouteOriginDestination) | **GET** /route/{origin}/{destination}/ | Get route
*EveSwaggerInterface.SearchApi* | [**getCharactersCharacterIdSearch**](docs/SearchApi.md#getCharactersCharacterIdSearch) | **GET** /characters/{character_id}/search/ | Search on a string
*EveSwaggerInterface.SkillsApi* | [**getCharactersCharacterIdAttributes**](docs/SkillsApi.md#getCharactersCharacterIdAttributes) | **GET** /characters/{character_id}/attributes/ | Get character attributes
*EveSwaggerInterface.SkillsApi* | [**getCharactersCharacterIdSkillqueue**](docs/SkillsApi.md#getCharactersCharacterIdSkillqueue) | **GET** /characters/{character_id}/skillqueue/ | Get character's skill queue
*EveSwaggerInterface.SkillsApi* | [**getCharactersCharacterIdSkills**](docs/SkillsApi.md#getCharactersCharacterIdSkills) | **GET** /characters/{character_id}/skills/ | Get character skills
*EveSwaggerInterface.SovereigntyApi* | [**getSovereigntyCampaigns**](docs/SovereigntyApi.md#getSovereigntyCampaigns) | **GET** /sovereignty/campaigns/ | List sovereignty campaigns
*EveSwaggerInterface.SovereigntyApi* | [**getSovereigntyMap**](docs/SovereigntyApi.md#getSovereigntyMap) | **GET** /sovereignty/map/ | List sovereignty of systems
*EveSwaggerInterface.SovereigntyApi* | [**getSovereigntyStructures**](docs/SovereigntyApi.md#getSovereigntyStructures) | **GET** /sovereignty/structures/ | List sovereignty structures
*EveSwaggerInterface.StatusApi* | [**getStatus**](docs/StatusApi.md#getStatus) | **GET** /status/ | Retrieve the uptime and player counts
*EveSwaggerInterface.UniverseApi* | [**getUniverseAncestries**](docs/UniverseApi.md#getUniverseAncestries) | **GET** /universe/ancestries/ | Get ancestries
*EveSwaggerInterface.UniverseApi* | [**getUniverseAsteroidBeltsAsteroidBeltId**](docs/UniverseApi.md#getUniverseAsteroidBeltsAsteroidBeltId) | **GET** /universe/asteroid_belts/{asteroid_belt_id}/ | Get asteroid belt information
*EveSwaggerInterface.UniverseApi* | [**getUniverseBloodlines**](docs/UniverseApi.md#getUniverseBloodlines) | **GET** /universe/bloodlines/ | Get bloodlines
*EveSwaggerInterface.UniverseApi* | [**getUniverseCategories**](docs/UniverseApi.md#getUniverseCategories) | **GET** /universe/categories/ | Get item categories
*EveSwaggerInterface.UniverseApi* | [**getUniverseCategoriesCategoryId**](docs/UniverseApi.md#getUniverseCategoriesCategoryId) | **GET** /universe/categories/{category_id}/ | Get item category information
*EveSwaggerInterface.UniverseApi* | [**getUniverseConstellations**](docs/UniverseApi.md#getUniverseConstellations) | **GET** /universe/constellations/ | Get constellations
*EveSwaggerInterface.UniverseApi* | [**getUniverseConstellationsConstellationId**](docs/UniverseApi.md#getUniverseConstellationsConstellationId) | **GET** /universe/constellations/{constellation_id}/ | Get constellation information
*EveSwaggerInterface.UniverseApi* | [**getUniverseFactions**](docs/UniverseApi.md#getUniverseFactions) | **GET** /universe/factions/ | Get factions
*EveSwaggerInterface.UniverseApi* | [**getUniverseGraphics**](docs/UniverseApi.md#getUniverseGraphics) | **GET** /universe/graphics/ | Get graphics
*EveSwaggerInterface.UniverseApi* | [**getUniverseGraphicsGraphicId**](docs/UniverseApi.md#getUniverseGraphicsGraphicId) | **GET** /universe/graphics/{graphic_id}/ | Get graphic information
*EveSwaggerInterface.UniverseApi* | [**getUniverseGroups**](docs/UniverseApi.md#getUniverseGroups) | **GET** /universe/groups/ | Get item groups
*EveSwaggerInterface.UniverseApi* | [**getUniverseGroupsGroupId**](docs/UniverseApi.md#getUniverseGroupsGroupId) | **GET** /universe/groups/{group_id}/ | Get item group information
*EveSwaggerInterface.UniverseApi* | [**getUniverseMoonsMoonId**](docs/UniverseApi.md#getUniverseMoonsMoonId) | **GET** /universe/moons/{moon_id}/ | Get moon information
*EveSwaggerInterface.UniverseApi* | [**getUniversePlanetsPlanetId**](docs/UniverseApi.md#getUniversePlanetsPlanetId) | **GET** /universe/planets/{planet_id}/ | Get planet information
*EveSwaggerInterface.UniverseApi* | [**getUniverseRaces**](docs/UniverseApi.md#getUniverseRaces) | **GET** /universe/races/ | Get character races
*EveSwaggerInterface.UniverseApi* | [**getUniverseRegions**](docs/UniverseApi.md#getUniverseRegions) | **GET** /universe/regions/ | Get regions
*EveSwaggerInterface.UniverseApi* | [**getUniverseRegionsRegionId**](docs/UniverseApi.md#getUniverseRegionsRegionId) | **GET** /universe/regions/{region_id}/ | Get region information
*EveSwaggerInterface.UniverseApi* | [**getUniverseStargatesStargateId**](docs/UniverseApi.md#getUniverseStargatesStargateId) | **GET** /universe/stargates/{stargate_id}/ | Get stargate information
*EveSwaggerInterface.UniverseApi* | [**getUniverseStarsStarId**](docs/UniverseApi.md#getUniverseStarsStarId) | **GET** /universe/stars/{star_id}/ | Get star information
*EveSwaggerInterface.UniverseApi* | [**getUniverseStationsStationId**](docs/UniverseApi.md#getUniverseStationsStationId) | **GET** /universe/stations/{station_id}/ | Get station information
*EveSwaggerInterface.UniverseApi* | [**getUniverseStructures**](docs/UniverseApi.md#getUniverseStructures) | **GET** /universe/structures/ | List all public structures
*EveSwaggerInterface.UniverseApi* | [**getUniverseStructuresStructureId**](docs/UniverseApi.md#getUniverseStructuresStructureId) | **GET** /universe/structures/{structure_id}/ | Get structure information
*EveSwaggerInterface.UniverseApi* | [**getUniverseSystemJumps**](docs/UniverseApi.md#getUniverseSystemJumps) | **GET** /universe/system_jumps/ | Get system jumps
*EveSwaggerInterface.UniverseApi* | [**getUniverseSystemKills**](docs/UniverseApi.md#getUniverseSystemKills) | **GET** /universe/system_kills/ | Get system kills
*EveSwaggerInterface.UniverseApi* | [**getUniverseSystems**](docs/UniverseApi.md#getUniverseSystems) | **GET** /universe/systems/ | Get solar systems
*EveSwaggerInterface.UniverseApi* | [**getUniverseSystemsSystemId**](docs/UniverseApi.md#getUniverseSystemsSystemId) | **GET** /universe/systems/{system_id}/ | Get solar system information
*EveSwaggerInterface.UniverseApi* | [**getUniverseTypes**](docs/UniverseApi.md#getUniverseTypes) | **GET** /universe/types/ | Get types
*EveSwaggerInterface.UniverseApi* | [**getUniverseTypesTypeId**](docs/UniverseApi.md#getUniverseTypesTypeId) | **GET** /universe/types/{type_id}/ | Get type information
*EveSwaggerInterface.UniverseApi* | [**postUniverseIds**](docs/UniverseApi.md#postUniverseIds) | **POST** /universe/ids/ | Bulk names to IDs
*EveSwaggerInterface.UniverseApi* | [**postUniverseNames**](docs/UniverseApi.md#postUniverseNames) | **POST** /universe/names/ | Get names and categories for a set of IDs
*EveSwaggerInterface.UserInterfaceApi* | [**postUiAutopilotWaypoint**](docs/UserInterfaceApi.md#postUiAutopilotWaypoint) | **POST** /ui/autopilot/waypoint/ | Set Autopilot Waypoint
*EveSwaggerInterface.UserInterfaceApi* | [**postUiOpenwindowContract**](docs/UserInterfaceApi.md#postUiOpenwindowContract) | **POST** /ui/openwindow/contract/ | Open Contract Window
*EveSwaggerInterface.UserInterfaceApi* | [**postUiOpenwindowInformation**](docs/UserInterfaceApi.md#postUiOpenwindowInformation) | **POST** /ui/openwindow/information/ | Open Information Window
*EveSwaggerInterface.UserInterfaceApi* | [**postUiOpenwindowMarketdetails**](docs/UserInterfaceApi.md#postUiOpenwindowMarketdetails) | **POST** /ui/openwindow/marketdetails/ | Open Market Details
*EveSwaggerInterface.UserInterfaceApi* | [**postUiOpenwindowNewmail**](docs/UserInterfaceApi.md#postUiOpenwindowNewmail) | **POST** /ui/openwindow/newmail/ | Open New Mail Window
*EveSwaggerInterface.WalletApi* | [**getCharactersCharacterIdWallet**](docs/WalletApi.md#getCharactersCharacterIdWallet) | **GET** /characters/{character_id}/wallet/ | Get a character's wallet balance
*EveSwaggerInterface.WalletApi* | [**getCharactersCharacterIdWalletJournal**](docs/WalletApi.md#getCharactersCharacterIdWalletJournal) | **GET** /characters/{character_id}/wallet/journal/ | Get character wallet journal
*EveSwaggerInterface.WalletApi* | [**getCharactersCharacterIdWalletTransactions**](docs/WalletApi.md#getCharactersCharacterIdWalletTransactions) | **GET** /characters/{character_id}/wallet/transactions/ | Get wallet transactions
*EveSwaggerInterface.WalletApi* | [**getCorporationsCorporationIdWallets**](docs/WalletApi.md#getCorporationsCorporationIdWallets) | **GET** /corporations/{corporation_id}/wallets/ | Returns a corporation's wallet balance
*EveSwaggerInterface.WalletApi* | [**getCorporationsCorporationIdWalletsDivisionJournal**](docs/WalletApi.md#getCorporationsCorporationIdWalletsDivisionJournal) | **GET** /corporations/{corporation_id}/wallets/{division}/journal/ | Get corporation wallet journal
*EveSwaggerInterface.WalletApi* | [**getCorporationsCorporationIdWalletsDivisionTransactions**](docs/WalletApi.md#getCorporationsCorporationIdWalletsDivisionTransactions) | **GET** /corporations/{corporation_id}/wallets/{division}/transactions/ | Get corporation wallet transactions
*EveSwaggerInterface.WarsApi* | [**getWars**](docs/WarsApi.md#getWars) | **GET** /wars/ | List wars
*EveSwaggerInterface.WarsApi* | [**getWarsWarId**](docs/WarsApi.md#getWarsWarId) | **GET** /wars/{war_id}/ | Get war information
*EveSwaggerInterface.WarsApi* | [**getWarsWarIdKillmails**](docs/WarsApi.md#getWarsWarIdKillmails) | **GET** /wars/{war_id}/killmails/ | List kills for a war