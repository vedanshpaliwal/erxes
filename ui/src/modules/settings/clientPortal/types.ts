export type ClientPortalConfig = {
  _id?: string;
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  icon?: string;
  domain?: string;
  dnsStatus?: string;
  knowledgeBaseLabel?: string;
  knowledgeBaseTopicId?: string;
  ticketLabel?: string;
  taskPublicBoardId?: string;
  taskPublicPipelineId?: string;
  taskLabel?: string;
  taskStageId?: string;
  taskBoardId?: string;
  taskPipelineId?: string;
  ticketStageId?: string;
  ticketBoardId?: string;
  ticketPipelineId?: string;
  styles?: Styles;
  advanced?: AdvancedSettings;
  css?: string;
  mobileResponsive?: boolean;
  googleCredentials?: object;
  twilioAccountSid?: string;
  twilioAuthToken?: string;
  twilioFromNumber?: string;
};

export type Styles = {
  bodyColor?: string;
  headerColor?: string;
  footerColor?: string;
  helpColor?: string;
  backgroundColor?: string;
  activeTabColor?: string;
  baseColor?: string;
  headingColor?: string;
  linkColor?: string;
  linkHoverColor?: string;
  primaryBtnColor?: string;
  secondaryBtnColor?: string;
  dividerColor?: string;
  baseFont?: string;
  headingFont?: string;
};

export type ClientPortalConfigsQueryResponse = {
  clientPortalGetConfigs?: [ClientPortalConfig];
  loading?: boolean;
};

export type ClientPortalConfigQueryResponse = {
  clientPortalGetConfig?: ClientPortalConfig;
  loading?: boolean;
};

export type ClientPortalTotalQueryResponse = {
  clientPortalConfigsTotalCount?: number;
  loading?: boolean;
};

export type ClientPortalGetLastQueryResponse = {
  clientPortalGetLast: ClientPortalConfig;
  loading?: boolean;
};

export type AdvancedSettings = {
  authAllow?: string;
  permission?: string;
  viewTicket?: string;
};