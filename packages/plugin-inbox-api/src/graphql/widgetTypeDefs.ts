export const types = (isProductsAvailable) => `
  ${
   isProductsAvailable ?
    `
    extend type Product @key(fields: "_id") {
      _id: String! @external
    }

    extend type ProductCategory @key(fields: "_id") {
      _id: String! @external
    }
    `
    : ''
  }

  extend type Field @key(fields: "_id") {
    _id: String! @external
  }

  type MessengerConnectResponse {
    integrationId: String
    uiOptions: JSON
    languageCode: String
    messengerData: JSON
    customerId: String
    visitorId: String
    brand: Brand
  }

  type ConversationDetailResponse {
    _id: String
    messages: [ConversationMessage]
    operatorStatus: String
    participatedUsers: [User]
    isOnline: Boolean
    supporters: [User]
  }

  type FormConnectResponse {
    integration: Integration
    form: Form
  }

  type SaveFormResponse {
    status: String!
    errors: [Error]
    messageId: String
    customerId: String
    userId: String
  }

  type Error {
    fieldId: String
    code: String
    text: String
  }

  type MessengerSupportersResponse {
    supporters: [User]
    isOnline: Boolean
    serverTime: String
  }

  type BookingProduct {
    ${
      isProductsAvailable ?
      `
        product: Product
      ` : ''
    }

    fields: [Field]
  }

  input FieldValueInput {
    _id: String!
    type: String
    validation: String
    text: String
    value: JSON
    associatedFieldId: String
    stageId: String
    groupId: String
    column: Int
  }
`;

export const queries = (isProductsAvailable) => `
  widgetsConversations(integrationId: String!, customerId: String, visitorId: String): [Conversation]
  widgetsConversationDetail(_id: String, integrationId: String!): ConversationDetailResponse
  widgetExportMessengerData(_id: String, integrationId: String!): String
  widgetsGetMessengerIntegration(brandCode: String!): Integration
  widgetsMessages(conversationId: String): [ConversationMessage]
  widgetsUnreadCount(conversationId: String): Int
  widgetsTotalUnreadCount(integrationId: String!, customerId: String, visitorId: String): Int
  widgetsMessengerSupporters(integrationId: String!): MessengerSupportersResponse
  widgetsGetEngageMessage(integrationId: String, customerId: String, visitorId: String, browserInfo: JSON!): ConversationMessage

  ${
    isProductsAvailable ? 
    `
      widgetsProductCategory(_id: String!): ProductCategory
    ` : ''
  }

  widgetsBookingProductWithFields(_id: String!): BookingProduct
`;

export const mutations = `
  widgetsMessengerConnect(
    brandCode: String!
    email: String
    phone: String
    code: String
    isUser: Boolean

    companyData: JSON
    data: JSON

    visitorId: String
    cachedCustomerId: String
    deviceToken: String
  ): MessengerConnectResponse

  widgetsSaveBrowserInfo(
    visitorId: String
    customerId: String
    browserInfo: JSON!
  ): ConversationMessage

  widgetsInsertMessage(
    integrationId: String!
    customerId: String
    visitorId: String
    conversationId: String
    message: String,
    attachments: [AttachmentInput],
    contentType: String,
    skillId: String
  ): ConversationMessage

  widgetBotRequest(
    customerId: String
    visitorId: String
    conversationId: String
    integrationId: String!,
    message: String!
    payload: String!
    type: String!
    ): JSON

  widgetsReadConversationMessages(conversationId: String): JSON
  widgetsSaveCustomerGetNotified(customerId: String, visitorId: String, type: String!, value: String!): JSON

  widgetsLeadConnect(
    brandCode: String!,
    formCode: String!,
    cachedCustomerId: String
  ): FormConnectResponse

  widgetsSaveLead(
    integrationId: String!
    formId: String!
    submissions: [FieldValueInput]
    browserInfo: JSON!
    cachedCustomerId: String
    userId: String
  ): SaveFormResponse

  widgetsSendEmail(
    toEmails: [String]
    fromEmail: String
    title: String
    content: String
    customerId: String
    formId: String
    attachments: [AttachmentInput]
  ): String

  widgetGetBotInitialMessage(integrationId: String): JSON

  widgetsLeadIncreaseViewCount(formId: String!): JSON
  widgetsSendTypingInfo(conversationId: String!, text: String): String

  widgetsBookingConnect(_id: String): Integration

  widgetsSaveBooking(
    integrationId: String!
    formId: String!
    submissions: [FieldValueInput]
    browserInfo: JSON!
    cachedCustomerId: String
    productId: String
  ): SaveFormResponse
`;