export interface MarketingCampaign {
  campaignId: string;
  campaignType: string;
  recipients: string[];
  subject: string;
  heading: string;
  subHeading: string;
  message: string;
  imageURL: string;
  footer: string;
}
