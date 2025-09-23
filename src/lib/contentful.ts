import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface ContentfulEvent {
  contentTypeId: "event";
  fields: {
    title: EntryFieldTypes.Text;
    startDate: EntryFieldTypes.Date;
    endDate?: EntryFieldTypes.Date;
    address: EntryFieldTypes.Text;
    locationLink: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
    ticketsLink?: EntryFieldTypes.Text;
    coverPhoto?: EntryFieldTypes.AssetLink;
  };
}

export interface ContentfulPhotoSection {
  contentTypeId: "photoGallery";
  fields: {
    title: EntryFieldTypes.Text;
    photos: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    date: EntryFieldTypes.Date;
  }
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
