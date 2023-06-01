/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Artiste = "artiste",
	Oeuvre = "oeuvre",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArtisteRecord = {
	nom_artiste?: string
	nationalite?: string
	date_artiste?: string
	naissance_mois_jour_annee?: IsoDateString
	deces_mois_jour_annee?: IsoDateString
	portrait?: string
}

export type OeuvreRecord = {
	nom_oeuvre?: string
	date_oeuvre?: string
	realisateur?: RecordIdString
	oeuvre_image?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArtisteResponse = Required<ArtisteRecord> & BaseSystemFields
export type OeuvreResponse<Texpand = unknown> = Required<OeuvreRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	artiste: ArtisteRecord
	oeuvre: OeuvreRecord
}

export type CollectionResponses = {
	artiste: ArtisteResponse
	oeuvre: OeuvreResponse
}