"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(obj) {
        if (obj) {
            if (obj.hasOwnProperty('fhir_comments')) {
                this.fhir_comments = obj.fhir_comments;
            }
        }
    }
}
exports.Base = Base;
class Extension {
    constructor(obj) {
        if (obj) {
            if (obj.hasOwnProperty('id')) {
                this.id = obj.id;
            }
            if (obj.hasOwnProperty('extension')) {
                this.extension = [];
                for (const o of obj.extension || []) {
                    this.extension.push(new Extension(o));
                }
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('valueBoolean')) {
                this.valueBoolean = obj.valueBoolean;
            }
            if (obj.hasOwnProperty('valueString')) {
                this.valueString = obj.valueString;
            }
            // TODO: Add other properties as needed
        }
    }
}
exports.Extension = Extension;
class Element extends Base {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('id')) {
                this.id = obj.id;
            }
            if (obj.hasOwnProperty('extension')) {
                this.extension = [];
                for (const o of obj.extension || []) {
                    this.extension.push(new Extension(o));
                }
            }
        }
    }
}
exports.Element = Element;
class Coding extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('userSelected')) {
                this.userSelected = obj.userSelected;
            }
        }
    }
}
exports.Coding = Coding;
class Meta extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('versionId')) {
                this.versionId = obj.versionId;
            }
            if (obj.hasOwnProperty('lastUpdated')) {
                this.lastUpdated = new Date(obj.lastUpdated);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('security')) {
                this.security = [];
                for (const o of obj.security || []) {
                    this.security.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('tag')) {
                this.tag = [];
                for (const o of obj.tag || []) {
                    this.tag.push(new Coding(o));
                }
            }
        }
    }
}
exports.Meta = Meta;
class Resource extends Base {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('id')) {
                this.id = obj.id;
            }
            if (obj.hasOwnProperty('meta')) {
                this.meta = new Meta(obj.meta);
            }
            if (obj.hasOwnProperty('implicitRules')) {
                this.implicitRules = obj.implicitRules;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
        }
    }
}
exports.Resource = Resource;
class CodeableConcept extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('coding')) {
                this.coding = [];
                for (const o of obj.coding || []) {
                    this.coding.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.CodeableConcept = CodeableConcept;
class Period extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('start')) {
                this.start = new Date(obj.start);
            }
            if (obj.hasOwnProperty('end')) {
                this.end = new Date(obj.end);
            }
        }
    }
}
exports.Period = Period;
class Identifier extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('assigner')) {
                this.assigner = new ResourceReference(obj.assigner);
            }
        }
    }
}
exports.Identifier = Identifier;
class ResourceReference extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = obj.reference;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
        }
    }
}
exports.ResourceReference = ResourceReference;
class Binary extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Binary';
        if (obj) {
            if (obj.hasOwnProperty('contentType')) {
                this.contentType = obj.contentType;
            }
            if (obj.hasOwnProperty('securityContext')) {
                this.securityContext = new ResourceReference(obj.securityContext);
            }
            if (obj.hasOwnProperty('data')) {
                this.data = obj.data;
            }
        }
    }
}
exports.Binary = Binary;
class Narrative extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('div')) {
                this.div = obj.div;
            }
        }
    }
}
exports.Narrative = Narrative;
class DomainResource extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DomainResource';
        if (obj) {
            if (obj.hasOwnProperty('text')) {
                this.text = new Narrative(obj.text);
            }
            if (obj.hasOwnProperty('contained')) {
                this.contained = [];
                for (const o of obj.contained || []) {
                    this.contained.push(new Resource(o));
                }
            }
            if (obj.hasOwnProperty('extension')) {
                this.extension = [];
                for (const o of obj.extension || []) {
                    this.extension.push(new Extension(o));
                }
            }
            if (obj.hasOwnProperty('modifierExtension')) {
                this.modifierExtension = [];
                for (const o of obj.modifierExtension || []) {
                    this.modifierExtension.push(new Extension(o));
                }
            }
        }
    }
}
exports.DomainResource = DomainResource;
class ContactPoint extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('rank')) {
                this.rank = obj.rank;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.ContactPoint = ContactPoint;
class ContactDetail extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
        }
    }
}
exports.ContactDetail = ContactDetail;
class UsageContext extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new Coding(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.UsageContext = UsageContext;
class BackboneElement extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('modifierExtension')) {
                this.modifierExtension = [];
                for (const o of obj.modifierExtension || []) {
                    this.modifierExtension.push(new Extension(o));
                }
            }
        }
    }
}
exports.BackboneElement = BackboneElement;
class StructureDefinitionMappingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identity')) {
                this.identity = obj.identity;
            }
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.StructureDefinitionMappingComponent = StructureDefinitionMappingComponent;
class ElementDefinitionDiscriminatorComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
        }
    }
}
exports.ElementDefinitionDiscriminatorComponent = ElementDefinitionDiscriminatorComponent;
class ElementDefinitionSlicingComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('discriminator')) {
                this.discriminator = [];
                for (const o of obj.discriminator || []) {
                    this.discriminator.push(new ElementDefinitionDiscriminatorComponent(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('ordered')) {
                this.ordered = obj.ordered;
            }
            if (obj.hasOwnProperty('rules')) {
                this.rules = obj.rules;
            }
        }
    }
}
exports.ElementDefinitionSlicingComponent = ElementDefinitionSlicingComponent;
class ElementDefinitionBaseComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
        }
    }
}
exports.ElementDefinitionBaseComponent = ElementDefinitionBaseComponent;
class ElementDefinitionTypeRefComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('targetProfile')) {
                this.targetProfile = obj.targetProfile;
            }
            if (obj.hasOwnProperty('aggregation')) {
                this.aggregation = obj.aggregation;
            }
            if (obj.hasOwnProperty('versioning')) {
                this.versioning = obj.versioning;
            }
        }
    }
}
exports.ElementDefinitionTypeRefComponent = ElementDefinitionTypeRefComponent;
class ElementDefinitionExampleComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('label')) {
                this.label = obj.label;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.ElementDefinitionExampleComponent = ElementDefinitionExampleComponent;
class ElementDefinitionConstraintComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('key')) {
                this.key = obj.key;
            }
            if (obj.hasOwnProperty('requirements')) {
                this.requirements = obj.requirements;
            }
            if (obj.hasOwnProperty('severity')) {
                this.severity = obj.severity;
            }
            if (obj.hasOwnProperty('human')) {
                this.human = obj.human;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('xpath')) {
                this.xpath = obj.xpath;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
        }
    }
}
exports.ElementDefinitionConstraintComponent = ElementDefinitionConstraintComponent;
class ElementDefinitionElementDefinitionBindingComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('strength')) {
                this.strength = obj.strength;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('valueSet')) {
                this.valueSet = obj.valueSet;
            }
        }
    }
}
exports.ElementDefinitionElementDefinitionBindingComponent = ElementDefinitionElementDefinitionBindingComponent;
class ElementDefinitionMappingComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identity')) {
                this.identity = obj.identity;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('map')) {
                this.map = obj.map;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.ElementDefinitionMappingComponent = ElementDefinitionMappingComponent;
class ElementDefinition extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('representation')) {
                this.representation = obj.representation;
            }
            if (obj.hasOwnProperty('sliceName')) {
                this.sliceName = obj.sliceName;
            }
            if (obj.hasOwnProperty('sliceIsConstraining')) {
                this.sliceIsConstraining = obj.sliceIsConstraining;
            }
            if (obj.hasOwnProperty('label')) {
                this.label = obj.label;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('slicing')) {
                this.slicing = new ElementDefinitionSlicingComponent(obj.slicing);
            }
            if (obj.hasOwnProperty('short')) {
                this.short = obj.short;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('requirements')) {
                this.requirements = obj.requirements;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
            if (obj.hasOwnProperty('base')) {
                this.base = new ElementDefinitionBaseComponent(obj.base);
            }
            if (obj.hasOwnProperty('contentReference')) {
                this.contentReference = obj.contentReference;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new ElementDefinitionTypeRefComponent(o));
                }
            }
            if (obj.hasOwnProperty('defaultValue')) {
                this.defaultValue = new Element(obj.defaultValue);
            }
            if (obj.hasOwnProperty('meaningWhenMissing')) {
                this.meaningWhenMissing = obj.meaningWhenMissing;
            }
            if (obj.hasOwnProperty('orderMeaning')) {
                this.orderMeaning = obj.orderMeaning;
            }
            if (obj.hasOwnProperty('fixed')) {
                this.fixed = new Element(obj.fixed);
            }
            if (obj.hasOwnProperty('pattern')) {
                this.pattern = new Element(obj.pattern);
            }
            if (obj.hasOwnProperty('example')) {
                this.example = [];
                for (const o of obj.example || []) {
                    this.example.push(new ElementDefinitionExampleComponent(o));
                }
            }
            if (obj.hasOwnProperty('minValue')) {
                this.minValue = new Element(obj.minValue);
            }
            if (obj.hasOwnProperty('maxValue')) {
                this.maxValue = new Element(obj.maxValue);
            }
            if (obj.hasOwnProperty('maxLength')) {
                this.maxLength = obj.maxLength;
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = obj.condition;
            }
            if (obj.hasOwnProperty('constraint')) {
                this.constraint = [];
                for (const o of obj.constraint || []) {
                    this.constraint.push(new ElementDefinitionConstraintComponent(o));
                }
            }
            if (obj.hasOwnProperty('mustSupport')) {
                this.mustSupport = obj.mustSupport;
            }
            if (obj.hasOwnProperty('isModifier')) {
                this.isModifier = obj.isModifier;
            }
            if (obj.hasOwnProperty('isModifierReason')) {
                this.isModifierReason = obj.isModifierReason;
            }
            if (obj.hasOwnProperty('isSummary')) {
                this.isSummary = obj.isSummary;
            }
            if (obj.hasOwnProperty('binding')) {
                this.binding = new ElementDefinitionElementDefinitionBindingComponent(obj.binding);
            }
            if (obj.hasOwnProperty('mapping')) {
                this.mapping = [];
                for (const o of obj.mapping || []) {
                    this.mapping.push(new ElementDefinitionMappingComponent(o));
                }
            }
        }
    }
}
exports.ElementDefinition = ElementDefinition;
class StructureDefinitionSnapshotComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('element')) {
                this.element = [];
                for (const o of obj.element || []) {
                    this.element.push(new ElementDefinition(o));
                }
            }
        }
    }
}
exports.StructureDefinitionSnapshotComponent = StructureDefinitionSnapshotComponent;
class StructureDefinitionDifferentialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('element')) {
                this.element = [];
                for (const o of obj.element || []) {
                    this.element.push(new ElementDefinition(o));
                }
            }
        }
    }
}
exports.StructureDefinitionDifferentialComponent = StructureDefinitionDifferentialComponent;
class StructureDefinitionContextComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.StructureDefinitionContextComponent = StructureDefinitionContextComponent;
class StructureDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'StructureDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('keyword')) {
                this.keyword = [];
                for (const o of obj.keyword || []) {
                    this.keyword.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('fhirVersion')) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.hasOwnProperty('mapping')) {
                this.mapping = [];
                for (const o of obj.mapping || []) {
                    this.mapping.push(new StructureDefinitionMappingComponent(o));
                }
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('abstract')) {
                this.abstract = obj.abstract;
            }
            if (obj.hasOwnProperty('context')) {
                this.context = [];
                for (const o of obj.context || []) {
                    this.context.push(new StructureDefinitionContextComponent(o));
                }
            }
            if (obj.hasOwnProperty('contextInvariant')) {
                this.contextInvariant = obj.contextInvariant;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('baseDefinition')) {
                this.baseDefinition = obj.baseDefinition;
            }
            if (obj.hasOwnProperty('derivation')) {
                this.derivation = obj.derivation;
            }
            if (obj.hasOwnProperty('snapshot')) {
                this.snapshot = new StructureDefinitionSnapshotComponent(obj.snapshot);
            }
            if (obj.hasOwnProperty('differential')) {
                this.differential = new StructureDefinitionDifferentialComponent(obj.differential);
            }
        }
    }
}
exports.StructureDefinition = StructureDefinition;
class ParametersParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new Resource(obj.resource);
            }
            if (obj.hasOwnProperty('part')) {
                this.part = [];
                for (const o of obj.part || []) {
                    this.part.push(new ParametersParameterComponent(o));
                }
            }
        }
    }
}
exports.ParametersParameterComponent = ParametersParameterComponent;
class Parameters extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Parameters';
        if (obj) {
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new ParametersParameterComponent(o));
                }
            }
        }
    }
}
exports.Parameters = Parameters;
class Query extends Parameters {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Query';
        if (obj) {
        }
    }
}
exports.Query = Query;
class Flag extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Flag';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.Flag = Flag;
class Alert extends Flag {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Alert';
        if (obj) {
        }
    }
}
exports.Alert = Alert;
class Quantity extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('comparator')) {
                this.comparator = obj.comparator;
            }
            if (obj.hasOwnProperty('unit')) {
                this.unit = obj.unit;
            }
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
        }
    }
}
exports.Quantity = Quantity;
class SimpleQuantity extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.SimpleQuantity = SimpleQuantity;
class Range extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('low')) {
                this.low = new Quantity(obj.low);
            }
            if (obj.hasOwnProperty('high')) {
                this.high = new Quantity(obj.high);
            }
        }
    }
}
exports.Range = Range;
class ObservationReferenceRangeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('low')) {
                this.low = new SimpleQuantity(obj.low);
            }
            if (obj.hasOwnProperty('high')) {
                this.high = new SimpleQuantity(obj.high);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('appliesTo')) {
                this.appliesTo = [];
                for (const o of obj.appliesTo || []) {
                    this.appliesTo.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('age')) {
                this.age = new Range(obj.age);
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.ObservationReferenceRangeComponent = ObservationReferenceRangeComponent;
class ObservationComponentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('dataAbsentReason')) {
                this.dataAbsentReason = new CodeableConcept(obj.dataAbsentReason);
            }
            if (obj.hasOwnProperty('interpretation')) {
                this.interpretation = [];
                for (const o of obj.interpretation || []) {
                    this.interpretation.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('referenceRange')) {
                this.referenceRange = [];
                for (const o of obj.referenceRange || []) {
                    this.referenceRange.push(new ObservationReferenceRangeComponent(o));
                }
            }
        }
    }
}
exports.ObservationComponentComponent = ObservationComponentComponent;
class Observation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Observation';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = [];
                for (const o of obj.focus || []) {
                    this.focus.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('effective')) {
                this.effective = new Element(obj.effective);
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('dataAbsentReason')) {
                this.dataAbsentReason = new CodeableConcept(obj.dataAbsentReason);
            }
            if (obj.hasOwnProperty('interpretation')) {
                this.interpretation = [];
                for (const o of obj.interpretation || []) {
                    this.interpretation.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('specimen')) {
                this.specimen = new ResourceReference(obj.specimen);
            }
            if (obj.hasOwnProperty('device')) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.hasOwnProperty('referenceRange')) {
                this.referenceRange = [];
                for (const o of obj.referenceRange || []) {
                    this.referenceRange.push(new ObservationReferenceRangeComponent(o));
                }
            }
            if (obj.hasOwnProperty('hasMember')) {
                this.hasMember = [];
                for (const o of obj.hasMember || []) {
                    this.hasMember.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('derivedFrom')) {
                this.derivedFrom = [];
                for (const o of obj.derivedFrom || []) {
                    this.derivedFrom.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('component')) {
                this.component = [];
                for (const o of obj.component || []) {
                    this.component.push(new ObservationComponentComponent(o));
                }
            }
        }
    }
}
exports.Observation = Observation;
class BundleLinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('relation')) {
                this.relation = obj.relation;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
        }
    }
}
exports.BundleLinkComponent = BundleLinkComponent;
class BundleSearchComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('score')) {
                this.score = obj.score;
            }
        }
    }
}
exports.BundleSearchComponent = BundleSearchComponent;
class BundleRequestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('method')) {
                this.method = obj.method;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('ifNoneMatch')) {
                this.ifNoneMatch = obj.ifNoneMatch;
            }
            if (obj.hasOwnProperty('ifModifiedSince')) {
                this.ifModifiedSince = new Date(obj.ifModifiedSince);
            }
            if (obj.hasOwnProperty('ifMatch')) {
                this.ifMatch = obj.ifMatch;
            }
            if (obj.hasOwnProperty('ifNoneExist')) {
                this.ifNoneExist = obj.ifNoneExist;
            }
        }
    }
}
exports.BundleRequestComponent = BundleRequestComponent;
class BundleResponseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('location')) {
                this.location = obj.location;
            }
            if (obj.hasOwnProperty('etag')) {
                this.etag = obj.etag;
            }
            if (obj.hasOwnProperty('lastModified')) {
                this.lastModified = new Date(obj.lastModified);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = new Resource(obj.outcome);
            }
        }
    }
}
exports.BundleResponseComponent = BundleResponseComponent;
class BundleEntryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new BundleLinkComponent(o));
                }
            }
            if (obj.hasOwnProperty('fullUrl')) {
                this.fullUrl = obj.fullUrl;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new Resource(obj.resource);
            }
            if (obj.hasOwnProperty('search')) {
                this.search = new BundleSearchComponent(obj.search);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new BundleRequestComponent(obj.request);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new BundleResponseComponent(obj.response);
            }
        }
    }
}
exports.BundleEntryComponent = BundleEntryComponent;
class Signature extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('when')) {
                this.when = new Date(obj.when);
            }
            if (obj.hasOwnProperty('who')) {
                this.who = new ResourceReference(obj.who);
            }
            if (obj.hasOwnProperty('onBehalfOf')) {
                this.onBehalfOf = new ResourceReference(obj.onBehalfOf);
            }
            if (obj.hasOwnProperty('targetFormat')) {
                this.targetFormat = obj.targetFormat;
            }
            if (obj.hasOwnProperty('sigFormat')) {
                this.sigFormat = obj.sigFormat;
            }
            if (obj.hasOwnProperty('data')) {
                this.data = obj.data;
            }
        }
    }
}
exports.Signature = Signature;
class Bundle extends Resource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Bundle';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('timestamp')) {
                this.timestamp = new Date(obj.timestamp);
            }
            if (obj.hasOwnProperty('total')) {
                this.total = obj.total;
            }
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new BundleLinkComponent(o));
                }
            }
            if (obj.hasOwnProperty('entry')) {
                this.entry = [];
                for (const o of obj.entry || []) {
                    this.entry.push(new BundleEntryComponent(o));
                }
            }
            if (obj.hasOwnProperty('signature')) {
                this.signature = new Signature(obj.signature);
            }
        }
    }
}
exports.Bundle = Bundle;
class BundleExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.BundleExtensions = BundleExtensions;
class CodeSystemFilterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('operator')) {
                this.operator = obj.operator;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.CodeSystemFilterComponent = CodeSystemFilterComponent;
class CodeSystemPropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
        }
    }
}
exports.CodeSystemPropertyComponent = CodeSystemPropertyComponent;
class CodeSystemDesignationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('use')) {
                this.use = new Coding(obj.use);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.CodeSystemDesignationComponent = CodeSystemDesignationComponent;
class CodeSystemConceptPropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.CodeSystemConceptPropertyComponent = CodeSystemConceptPropertyComponent;
class CodeSystemConceptDefinitionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('designation')) {
                this.designation = [];
                for (const o of obj.designation || []) {
                    this.designation.push(new CodeSystemDesignationComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = [];
                for (const o of obj.property || []) {
                    this.property.push(new CodeSystemConceptPropertyComponent(o));
                }
            }
            if (obj.hasOwnProperty('concept')) {
                this.concept = [];
                for (const o of obj.concept || []) {
                    this.concept.push(new CodeSystemConceptDefinitionComponent(o));
                }
            }
        }
    }
}
exports.CodeSystemConceptDefinitionComponent = CodeSystemConceptDefinitionComponent;
class CodeSystem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CodeSystem';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('caseSensitive')) {
                this.caseSensitive = obj.caseSensitive;
            }
            if (obj.hasOwnProperty('valueSet')) {
                this.valueSet = obj.valueSet;
            }
            if (obj.hasOwnProperty('hierarchyMeaning')) {
                this.hierarchyMeaning = obj.hierarchyMeaning;
            }
            if (obj.hasOwnProperty('compositional')) {
                this.compositional = obj.compositional;
            }
            if (obj.hasOwnProperty('versionNeeded')) {
                this.versionNeeded = obj.versionNeeded;
            }
            if (obj.hasOwnProperty('content')) {
                this.content = obj.content;
            }
            if (obj.hasOwnProperty('supplements')) {
                this.supplements = obj.supplements;
            }
            if (obj.hasOwnProperty('count')) {
                this.count = obj.count;
            }
            if (obj.hasOwnProperty('filter')) {
                this.filter = [];
                for (const o of obj.filter || []) {
                    this.filter.push(new CodeSystemFilterComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = [];
                for (const o of obj.property || []) {
                    this.property.push(new CodeSystemPropertyComponent(o));
                }
            }
            if (obj.hasOwnProperty('concept')) {
                this.concept = [];
                for (const o of obj.concept || []) {
                    this.concept.push(new CodeSystemConceptDefinitionComponent(o));
                }
            }
        }
    }
}
exports.CodeSystem = CodeSystem;
class CodeSystemExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.CodeSystemExtensions = CodeSystemExtensions;
class ConceptMapOtherElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('property')) {
                this.property = obj.property;
            }
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
        }
    }
}
exports.ConceptMapOtherElementComponent = ConceptMapOtherElementComponent;
class ConceptMapTargetElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('equivalence')) {
                this.equivalence = obj.equivalence;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('dependsOn')) {
                this.dependsOn = [];
                for (const o of obj.dependsOn || []) {
                    this.dependsOn.push(new ConceptMapOtherElementComponent(o));
                }
            }
            if (obj.hasOwnProperty('product')) {
                this.product = [];
                for (const o of obj.product || []) {
                    this.product.push(new ConceptMapOtherElementComponent(o));
                }
            }
        }
    }
}
exports.ConceptMapTargetElementComponent = ConceptMapTargetElementComponent;
class ConceptMapSourceElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new ConceptMapTargetElementComponent(o));
                }
            }
        }
    }
}
exports.ConceptMapSourceElementComponent = ConceptMapSourceElementComponent;
class ConceptMapUnmappedComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
        }
    }
}
exports.ConceptMapUnmappedComponent = ConceptMapUnmappedComponent;
class ConceptMapGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('sourceVersion')) {
                this.sourceVersion = obj.sourceVersion;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = obj.target;
            }
            if (obj.hasOwnProperty('targetVersion')) {
                this.targetVersion = obj.targetVersion;
            }
            if (obj.hasOwnProperty('element')) {
                this.element = [];
                for (const o of obj.element || []) {
                    this.element.push(new ConceptMapSourceElementComponent(o));
                }
            }
            if (obj.hasOwnProperty('unmapped')) {
                this.unmapped = new ConceptMapUnmappedComponent(obj.unmapped);
            }
        }
    }
}
exports.ConceptMapGroupComponent = ConceptMapGroupComponent;
class ConceptMap extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ConceptMap';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new Element(obj.source);
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new Element(obj.target);
            }
            if (obj.hasOwnProperty('group')) {
                this.group = [];
                for (const o of obj.group || []) {
                    this.group.push(new ConceptMapGroupComponent(o));
                }
            }
        }
    }
}
exports.ConceptMap = ConceptMap;
class ElementDefinitionExtensions {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.ElementDefinitionExtensions = ElementDefinitionExtensions;
class AccountCoverageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
        }
    }
}
exports.AccountCoverageComponent = AccountCoverageComponent;
class AccountGuarantorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('party')) {
                this.party = new ResourceReference(obj.party);
            }
            if (obj.hasOwnProperty('onHold')) {
                this.onHold = obj.onHold;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.AccountGuarantorComponent = AccountGuarantorComponent;
class Account extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Account';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('servicePeriod')) {
                this.servicePeriod = new Period(obj.servicePeriod);
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = [];
                for (const o of obj.coverage || []) {
                    this.coverage.push(new AccountCoverageComponent(o));
                }
            }
            if (obj.hasOwnProperty('owner')) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('guarantor')) {
                this.guarantor = [];
                for (const o of obj.guarantor || []) {
                    this.guarantor.push(new AccountGuarantorComponent(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = new ResourceReference(obj.partOf);
            }
        }
    }
}
exports.Account = Account;
class Attachment extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('contentType')) {
                this.contentType = obj.contentType;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('data')) {
                this.data = obj.data;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('size')) {
                this.size = obj.size;
            }
            if (obj.hasOwnProperty('hash')) {
                this.hash = obj.hash;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('creation')) {
                this.creation = new Date(obj.creation);
            }
        }
    }
}
exports.Attachment = Attachment;
class RelatedArtifact extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('citation')) {
                this.citation = obj.citation;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('document')) {
                this.document = new Attachment(obj.document);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = obj.resource;
            }
        }
    }
}
exports.RelatedArtifact = RelatedArtifact;
class ActivityDefinitionParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
        }
    }
}
exports.ActivityDefinitionParticipantComponent = ActivityDefinitionParticipantComponent;
class TimingRepeatComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('bounds')) {
                this.bounds = new Element(obj.bounds);
            }
            if (obj.hasOwnProperty('count')) {
                this.count = obj.count;
            }
            if (obj.hasOwnProperty('countMax')) {
                this.countMax = obj.countMax;
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = obj.duration;
            }
            if (obj.hasOwnProperty('durationMax')) {
                this.durationMax = obj.durationMax;
            }
            if (obj.hasOwnProperty('durationUnit')) {
                this.durationUnit = obj.durationUnit;
            }
            if (obj.hasOwnProperty('frequency')) {
                this.frequency = obj.frequency;
            }
            if (obj.hasOwnProperty('frequencyMax')) {
                this.frequencyMax = obj.frequencyMax;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = obj.period;
            }
            if (obj.hasOwnProperty('periodMax')) {
                this.periodMax = obj.periodMax;
            }
            if (obj.hasOwnProperty('periodUnit')) {
                this.periodUnit = obj.periodUnit;
            }
            if (obj.hasOwnProperty('dayOfWeek')) {
                this.dayOfWeek = obj.dayOfWeek;
            }
            if (obj.hasOwnProperty('timeOfDay')) {
                this.timeOfDay = obj.timeOfDay;
            }
            if (obj.hasOwnProperty('when')) {
                this.when = obj.when;
            }
            if (obj.hasOwnProperty('offset')) {
                this.offset = obj.offset;
            }
        }
    }
}
exports.TimingRepeatComponent = TimingRepeatComponent;
class Timing extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('event')) {
                this.event = obj.event;
            }
            if (obj.hasOwnProperty('repeat')) {
                this.repeat = new TimingRepeatComponent(obj.repeat);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.Timing = Timing;
class DosageDoseAndRateComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('dose')) {
                this.dose = new Element(obj.dose);
            }
            if (obj.hasOwnProperty('rate')) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.DosageDoseAndRateComponent = DosageDoseAndRateComponent;
class Ratio extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('numerator')) {
                this.numerator = new Quantity(obj.numerator);
            }
            if (obj.hasOwnProperty('denominator')) {
                this.denominator = new Quantity(obj.denominator);
            }
        }
    }
}
exports.Ratio = Ratio;
class Dosage extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('additionalInstruction')) {
                this.additionalInstruction = [];
                for (const o of obj.additionalInstruction || []) {
                    this.additionalInstruction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('patientInstruction')) {
                this.patientInstruction = obj.patientInstruction;
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Timing(obj.timing);
            }
            if (obj.hasOwnProperty('asNeeded')) {
                this.asNeeded = new Element(obj.asNeeded);
            }
            if (obj.hasOwnProperty('site')) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.hasOwnProperty('route')) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('doseAndRate')) {
                this.doseAndRate = [];
                for (const o of obj.doseAndRate || []) {
                    this.doseAndRate.push(new DosageDoseAndRateComponent(o));
                }
            }
            if (obj.hasOwnProperty('maxDosePerPeriod')) {
                this.maxDosePerPeriod = new Ratio(obj.maxDosePerPeriod);
            }
            if (obj.hasOwnProperty('maxDosePerAdministration')) {
                this.maxDosePerAdministration = new Quantity(obj.maxDosePerAdministration);
            }
            if (obj.hasOwnProperty('maxDosePerLifetime')) {
                this.maxDosePerLifetime = new Quantity(obj.maxDosePerLifetime);
            }
        }
    }
}
exports.Dosage = Dosage;
class Expression extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = obj.reference;
            }
        }
    }
}
exports.Expression = Expression;
class ActivityDefinitionDynamicValueComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = new Expression(obj.expression);
            }
        }
    }
}
exports.ActivityDefinitionDynamicValueComponent = ActivityDefinitionDynamicValueComponent;
class ActivityDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ActivityDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = [];
                for (const o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('editor')) {
                this.editor = [];
                for (const o of obj.editor || []) {
                    this.editor.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('reviewer')) {
                this.reviewer = [];
                for (const o of obj.reviewer || []) {
                    this.reviewer.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('endorser')) {
                this.endorser = [];
                for (const o of obj.endorser || []) {
                    this.endorser.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('library')) {
                this.library = obj.library;
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new ActivityDefinitionParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('product')) {
                this.product = new Element(obj.product);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('dosage')) {
                this.dosage = [];
                for (const o of obj.dosage || []) {
                    this.dosage.push(new Dosage(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = [];
                for (const o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specimenRequirement')) {
                this.specimenRequirement = [];
                for (const o of obj.specimenRequirement || []) {
                    this.specimenRequirement.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('observationRequirement')) {
                this.observationRequirement = [];
                for (const o of obj.observationRequirement || []) {
                    this.observationRequirement.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('observationResultRequirement')) {
                this.observationResultRequirement = [];
                for (const o of obj.observationResultRequirement || []) {
                    this.observationResultRequirement.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('transform')) {
                this.transform = obj.transform;
            }
            if (obj.hasOwnProperty('dynamicValue')) {
                this.dynamicValue = [];
                for (const o of obj.dynamicValue || []) {
                    this.dynamicValue.push(new ActivityDefinitionDynamicValueComponent(o));
                }
            }
        }
    }
}
exports.ActivityDefinition = ActivityDefinition;
class Address extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('line')) {
                this.line = obj.line;
            }
            if (obj.hasOwnProperty('city')) {
                this.city = obj.city;
            }
            if (obj.hasOwnProperty('district')) {
                this.district = obj.district;
            }
            if (obj.hasOwnProperty('state')) {
                this.state = obj.state;
            }
            if (obj.hasOwnProperty('postalCode')) {
                this.postalCode = obj.postalCode;
            }
            if (obj.hasOwnProperty('country')) {
                this.country = obj.country;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.Address = Address;
class AdverseEventCausalityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('assessment')) {
                this.assessment = new CodeableConcept(obj.assessment);
            }
            if (obj.hasOwnProperty('productRelatedness')) {
                this.productRelatedness = obj.productRelatedness;
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
        }
    }
}
exports.AdverseEventCausalityComponent = AdverseEventCausalityComponent;
class AdverseEventSuspectEntityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('instance')) {
                this.instance = new ResourceReference(obj.instance);
            }
            if (obj.hasOwnProperty('causality')) {
                this.causality = [];
                for (const o of obj.causality || []) {
                    this.causality.push(new AdverseEventCausalityComponent(o));
                }
            }
        }
    }
}
exports.AdverseEventSuspectEntityComponent = AdverseEventSuspectEntityComponent;
class AdverseEvent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AdverseEvent';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('actuality')) {
                this.actuality = obj.actuality;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('event')) {
                this.event = new CodeableConcept(obj.event);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('detected')) {
                this.detected = new Date(obj.detected);
            }
            if (obj.hasOwnProperty('recordedDate')) {
                this.recordedDate = new Date(obj.recordedDate);
            }
            if (obj.hasOwnProperty('resultingCondition')) {
                this.resultingCondition = [];
                for (const o of obj.resultingCondition || []) {
                    this.resultingCondition.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('seriousness')) {
                this.seriousness = new CodeableConcept(obj.seriousness);
            }
            if (obj.hasOwnProperty('severity')) {
                this.severity = new CodeableConcept(obj.severity);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.hasOwnProperty('recorder')) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.hasOwnProperty('contributor')) {
                this.contributor = [];
                for (const o of obj.contributor || []) {
                    this.contributor.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('suspectEntity')) {
                this.suspectEntity = [];
                for (const o of obj.suspectEntity || []) {
                    this.suspectEntity.push(new AdverseEventSuspectEntityComponent(o));
                }
            }
            if (obj.hasOwnProperty('subjectMedicalHistory')) {
                this.subjectMedicalHistory = [];
                for (const o of obj.subjectMedicalHistory || []) {
                    this.subjectMedicalHistory.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('referenceDocument')) {
                this.referenceDocument = [];
                for (const o of obj.referenceDocument || []) {
                    this.referenceDocument.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('study')) {
                this.study = [];
                for (const o of obj.study || []) {
                    this.study.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.AdverseEvent = AdverseEvent;
class Age extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Age = Age;
class Annotation extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('author')) {
                this.author = new Element(obj.author);
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Date(obj.time);
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.Annotation = Annotation;
class AllergyIntoleranceReactionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('substance')) {
                this.substance = new CodeableConcept(obj.substance);
            }
            if (obj.hasOwnProperty('manifestation')) {
                this.manifestation = [];
                for (const o of obj.manifestation || []) {
                    this.manifestation.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('onset')) {
                this.onset = new Date(obj.onset);
            }
            if (obj.hasOwnProperty('severity')) {
                this.severity = obj.severity;
            }
            if (obj.hasOwnProperty('exposureRoute')) {
                this.exposureRoute = new CodeableConcept(obj.exposureRoute);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.AllergyIntoleranceReactionComponent = AllergyIntoleranceReactionComponent;
class AllergyIntolerance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AllergyIntolerance';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('clinicalStatus')) {
                this.clinicalStatus = obj.clinicalStatus;
            }
            if (obj.hasOwnProperty('verificationStatus')) {
                this.verificationStatus = obj.verificationStatus;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = obj.category;
            }
            if (obj.hasOwnProperty('criticality')) {
                this.criticality = obj.criticality;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('onset')) {
                this.onset = new Element(obj.onset);
            }
            if (obj.hasOwnProperty('recordedDate')) {
                this.recordedDate = new Date(obj.recordedDate);
            }
            if (obj.hasOwnProperty('recorder')) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.hasOwnProperty('asserter')) {
                this.asserter = new ResourceReference(obj.asserter);
            }
            if (obj.hasOwnProperty('lastOccurrence')) {
                this.lastOccurrence = new Date(obj.lastOccurrence);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('reaction')) {
                this.reaction = [];
                for (const o of obj.reaction || []) {
                    this.reaction.push(new AllergyIntoleranceReactionComponent(o));
                }
            }
        }
    }
}
exports.AllergyIntolerance = AllergyIntolerance;
class AppointmentParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
            if (obj.hasOwnProperty('required')) {
                this.required = obj.required;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.AppointmentParticipantComponent = AppointmentParticipantComponent;
class Appointment extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Appointment';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('serviceCategory')) {
                this.serviceCategory = [];
                for (const o of obj.serviceCategory || []) {
                    this.serviceCategory.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviceType')) {
                this.serviceType = [];
                for (const o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('appointmentType')) {
                this.appointmentType = new CodeableConcept(obj.appointmentType);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('indication')) {
                this.indication = [];
                for (const o of obj.indication || []) {
                    this.indication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('start')) {
                this.start = new Date(obj.start);
            }
            if (obj.hasOwnProperty('end')) {
                this.end = new Date(obj.end);
            }
            if (obj.hasOwnProperty('minutesDuration')) {
                this.minutesDuration = obj.minutesDuration;
            }
            if (obj.hasOwnProperty('slot')) {
                this.slot = [];
                for (const o of obj.slot || []) {
                    this.slot.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('patientInstruction')) {
                this.patientInstruction = obj.patientInstruction;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new AppointmentParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('requestedPeriod')) {
                this.requestedPeriod = [];
                for (const o of obj.requestedPeriod || []) {
                    this.requestedPeriod.push(new Period(o));
                }
            }
        }
    }
}
exports.Appointment = Appointment;
class AppointmentResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AppointmentResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('appointment')) {
                this.appointment = new ResourceReference(obj.appointment);
            }
            if (obj.hasOwnProperty('start')) {
                this.start = new Date(obj.start);
            }
            if (obj.hasOwnProperty('end')) {
                this.end = new Date(obj.end);
            }
            if (obj.hasOwnProperty('participantType')) {
                this.participantType = [];
                for (const o of obj.participantType || []) {
                    this.participantType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
            if (obj.hasOwnProperty('participantStatus')) {
                this.participantStatus = obj.participantStatus;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.AppointmentResponse = AppointmentResponse;
class AuditEventNetworkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('address')) {
                this.address = obj.address;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
        }
    }
}
exports.AuditEventNetworkComponent = AuditEventNetworkComponent;
class AuditEventAgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = [];
                for (const o of obj.role || []) {
                    this.role.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('who')) {
                this.who = new ResourceReference(obj.who);
            }
            if (obj.hasOwnProperty('altId')) {
                this.altId = obj.altId;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('requestor')) {
                this.requestor = obj.requestor;
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('policy')) {
                this.policy = obj.policy;
            }
            if (obj.hasOwnProperty('media')) {
                this.media = new Coding(obj.media);
            }
            if (obj.hasOwnProperty('network')) {
                this.network = new AuditEventNetworkComponent(obj.network);
            }
            if (obj.hasOwnProperty('purposeOfUse')) {
                this.purposeOfUse = [];
                for (const o of obj.purposeOfUse || []) {
                    this.purposeOfUse.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.AuditEventAgentComponent = AuditEventAgentComponent;
class AuditEventSourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('site')) {
                this.site = obj.site;
            }
            if (obj.hasOwnProperty('observer')) {
                this.observer = new ResourceReference(obj.observer);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new Coding(o));
                }
            }
        }
    }
}
exports.AuditEventSourceComponent = AuditEventSourceComponent;
class AuditEventDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.AuditEventDetailComponent = AuditEventDetailComponent;
class AuditEventEntityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('what')) {
                this.what = new ResourceReference(obj.what);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new Coding(obj.role);
            }
            if (obj.hasOwnProperty('lifecycle')) {
                this.lifecycle = new Coding(obj.lifecycle);
            }
            if (obj.hasOwnProperty('securityLabel')) {
                this.securityLabel = [];
                for (const o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('query')) {
                this.query = obj.query;
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new AuditEventDetailComponent(o));
                }
            }
        }
    }
}
exports.AuditEventEntityComponent = AuditEventEntityComponent;
class AuditEvent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'AuditEvent';
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('subtype')) {
                this.subtype = [];
                for (const o of obj.subtype || []) {
                    this.subtype.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = obj.action;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('recorded')) {
                this.recorded = new Date(obj.recorded);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('outcomeDesc')) {
                this.outcomeDesc = obj.outcomeDesc;
            }
            if (obj.hasOwnProperty('purposeOfEvent')) {
                this.purposeOfEvent = [];
                for (const o of obj.purposeOfEvent || []) {
                    this.purposeOfEvent.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('agent')) {
                this.agent = [];
                for (const o of obj.agent || []) {
                    this.agent.push(new AuditEventAgentComponent(o));
                }
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new AuditEventSourceComponent(obj.source);
            }
            if (obj.hasOwnProperty('entity')) {
                this.entity = [];
                for (const o of obj.entity || []) {
                    this.entity.push(new AuditEventEntityComponent(o));
                }
            }
        }
    }
}
exports.AuditEvent = AuditEvent;
class Basic extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Basic';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.Basic = Basic;
class BiologicallyDerivedProductCollectionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('collector')) {
                this.collector = new ResourceReference(obj.collector);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('collected')) {
                this.collected = new Element(obj.collected);
            }
        }
    }
}
exports.BiologicallyDerivedProductCollectionComponent = BiologicallyDerivedProductCollectionComponent;
class BiologicallyDerivedProductProcessingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = new CodeableConcept(obj.procedure);
            }
            if (obj.hasOwnProperty('additive')) {
                this.additive = new ResourceReference(obj.additive);
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Element(obj.time);
            }
        }
    }
}
exports.BiologicallyDerivedProductProcessingComponent = BiologicallyDerivedProductProcessingComponent;
class BiologicallyDerivedProductManipulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Element(obj.time);
            }
        }
    }
}
exports.BiologicallyDerivedProductManipulationComponent = BiologicallyDerivedProductManipulationComponent;
class BiologicallyDerivedProductStorageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('temperature')) {
                this.temperature = obj.temperature;
            }
            if (obj.hasOwnProperty('scale')) {
                this.scale = obj.scale;
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new Period(obj.duration);
            }
        }
    }
}
exports.BiologicallyDerivedProductStorageComponent = BiologicallyDerivedProductStorageComponent;
class BiologicallyDerivedProduct extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'BiologicallyDerivedProduct';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('productCategory')) {
                this.productCategory = obj.productCategory;
            }
            if (obj.hasOwnProperty('productCode')) {
                this.productCode = new CodeableConcept(obj.productCode);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('request')) {
                this.request = [];
                for (const o of obj.request || []) {
                    this.request.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = obj.quantity;
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.hasOwnProperty('collection')) {
                this.collection = new BiologicallyDerivedProductCollectionComponent(obj.collection);
            }
            if (obj.hasOwnProperty('processing')) {
                this.processing = [];
                for (const o of obj.processing || []) {
                    this.processing.push(new BiologicallyDerivedProductProcessingComponent(o));
                }
            }
            if (obj.hasOwnProperty('manipulation')) {
                this.manipulation = new BiologicallyDerivedProductManipulationComponent(obj.manipulation);
            }
            if (obj.hasOwnProperty('storage')) {
                this.storage = [];
                for (const o of obj.storage || []) {
                    this.storage.push(new BiologicallyDerivedProductStorageComponent(o));
                }
            }
        }
    }
}
exports.BiologicallyDerivedProduct = BiologicallyDerivedProduct;
class BodySite {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.BodySite = BodySite;
class BodyStructure extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'BodyStructure';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('morphology')) {
                this.morphology = new CodeableConcept(obj.morphology);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new CodeableConcept(obj.location);
            }
            if (obj.hasOwnProperty('locationQualifier')) {
                this.locationQualifier = [];
                for (const o of obj.locationQualifier || []) {
                    this.locationQualifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('image')) {
                this.image = [];
                for (const o of obj.image || []) {
                    this.image.push(new Attachment(o));
                }
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
        }
    }
}
exports.BodyStructure = BodyStructure;
class CapabilityStatementSoftwareComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('releaseDate')) {
                this.releaseDate = new Date(obj.releaseDate);
            }
        }
    }
}
exports.CapabilityStatementSoftwareComponent = CapabilityStatementSoftwareComponent;
class CapabilityStatementImplementationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('custodian')) {
                this.custodian = new ResourceReference(obj.custodian);
            }
        }
    }
}
exports.CapabilityStatementImplementationComponent = CapabilityStatementImplementationComponent;
class CapabilityStatementSecurityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('cors')) {
                this.cors = obj.cors;
            }
            if (obj.hasOwnProperty('service')) {
                this.service = [];
                for (const o of obj.service || []) {
                    this.service.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.CapabilityStatementSecurityComponent = CapabilityStatementSecurityComponent;
class CapabilityStatementResourceInteractionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.CapabilityStatementResourceInteractionComponent = CapabilityStatementResourceInteractionComponent;
class CapabilityStatementSearchParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.CapabilityStatementSearchParamComponent = CapabilityStatementSearchParamComponent;
class CapabilityStatementOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.CapabilityStatementOperationComponent = CapabilityStatementOperationComponent;
class CapabilityStatementResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('supportedProfile')) {
                this.supportedProfile = obj.supportedProfile;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = [];
                for (const o of obj.interaction || []) {
                    this.interaction.push(new CapabilityStatementResourceInteractionComponent(o));
                }
            }
            if (obj.hasOwnProperty('versioning')) {
                this.versioning = obj.versioning;
            }
            if (obj.hasOwnProperty('readHistory')) {
                this.readHistory = obj.readHistory;
            }
            if (obj.hasOwnProperty('updateCreate')) {
                this.updateCreate = obj.updateCreate;
            }
            if (obj.hasOwnProperty('conditionalCreate')) {
                this.conditionalCreate = obj.conditionalCreate;
            }
            if (obj.hasOwnProperty('conditionalRead')) {
                this.conditionalRead = obj.conditionalRead;
            }
            if (obj.hasOwnProperty('conditionalUpdate')) {
                this.conditionalUpdate = obj.conditionalUpdate;
            }
            if (obj.hasOwnProperty('conditionalDelete')) {
                this.conditionalDelete = obj.conditionalDelete;
            }
            if (obj.hasOwnProperty('referencePolicy')) {
                this.referencePolicy = obj.referencePolicy;
            }
            if (obj.hasOwnProperty('searchInclude')) {
                this.searchInclude = obj.searchInclude;
            }
            if (obj.hasOwnProperty('searchRevInclude')) {
                this.searchRevInclude = obj.searchRevInclude;
            }
            if (obj.hasOwnProperty('searchParam')) {
                this.searchParam = [];
                for (const o of obj.searchParam || []) {
                    this.searchParam.push(new CapabilityStatementSearchParamComponent(o));
                }
            }
            if (obj.hasOwnProperty('operation')) {
                this.operation = [];
                for (const o of obj.operation || []) {
                    this.operation.push(new CapabilityStatementOperationComponent(o));
                }
            }
        }
    }
}
exports.CapabilityStatementResourceComponent = CapabilityStatementResourceComponent;
class CapabilityStatementSystemInteractionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.CapabilityStatementSystemInteractionComponent = CapabilityStatementSystemInteractionComponent;
class CapabilityStatementRestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('security')) {
                this.security = new CapabilityStatementSecurityComponent(obj.security);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = [];
                for (const o of obj.resource || []) {
                    this.resource.push(new CapabilityStatementResourceComponent(o));
                }
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = [];
                for (const o of obj.interaction || []) {
                    this.interaction.push(new CapabilityStatementSystemInteractionComponent(o));
                }
            }
            if (obj.hasOwnProperty('searchParam')) {
                this.searchParam = [];
                for (const o of obj.searchParam || []) {
                    this.searchParam.push(new CapabilityStatementSearchParamComponent(o));
                }
            }
            if (obj.hasOwnProperty('operation')) {
                this.operation = [];
                for (const o of obj.operation || []) {
                    this.operation.push(new CapabilityStatementOperationComponent(o));
                }
            }
            if (obj.hasOwnProperty('compartment')) {
                this.compartment = obj.compartment;
            }
        }
    }
}
exports.CapabilityStatementRestComponent = CapabilityStatementRestComponent;
class CapabilityStatementEndpointComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('protocol')) {
                this.protocol = new Coding(obj.protocol);
            }
            if (obj.hasOwnProperty('address')) {
                this.address = obj.address;
            }
        }
    }
}
exports.CapabilityStatementEndpointComponent = CapabilityStatementEndpointComponent;
class CapabilityStatementSupportedMessageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
        }
    }
}
exports.CapabilityStatementSupportedMessageComponent = CapabilityStatementSupportedMessageComponent;
class CapabilityStatementMessagingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new CapabilityStatementEndpointComponent(o));
                }
            }
            if (obj.hasOwnProperty('reliableCache')) {
                this.reliableCache = obj.reliableCache;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('supportedMessage')) {
                this.supportedMessage = [];
                for (const o of obj.supportedMessage || []) {
                    this.supportedMessage.push(new CapabilityStatementSupportedMessageComponent(o));
                }
            }
        }
    }
}
exports.CapabilityStatementMessagingComponent = CapabilityStatementMessagingComponent;
class CapabilityStatementDocumentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
        }
    }
}
exports.CapabilityStatementDocumentComponent = CapabilityStatementDocumentComponent;
class CapabilityStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CapabilityStatement';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('instantiates')) {
                this.instantiates = obj.instantiates;
            }
            if (obj.hasOwnProperty('imports')) {
                this.imports = obj.imports;
            }
            if (obj.hasOwnProperty('software')) {
                this.software = new CapabilityStatementSoftwareComponent(obj.software);
            }
            if (obj.hasOwnProperty('implementation')) {
                this.implementation = new CapabilityStatementImplementationComponent(obj.implementation);
            }
            if (obj.hasOwnProperty('fhirVersion')) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.hasOwnProperty('format')) {
                this.format = obj.format;
            }
            if (obj.hasOwnProperty('patchFormat')) {
                this.patchFormat = obj.patchFormat;
            }
            if (obj.hasOwnProperty('implementationGuide')) {
                this.implementationGuide = obj.implementationGuide;
            }
            if (obj.hasOwnProperty('rest')) {
                this.rest = [];
                for (const o of obj.rest || []) {
                    this.rest.push(new CapabilityStatementRestComponent(o));
                }
            }
            if (obj.hasOwnProperty('messaging')) {
                this.messaging = [];
                for (const o of obj.messaging || []) {
                    this.messaging.push(new CapabilityStatementMessagingComponent(o));
                }
            }
            if (obj.hasOwnProperty('document')) {
                this.document = [];
                for (const o of obj.document || []) {
                    this.document.push(new CapabilityStatementDocumentComponent(o));
                }
            }
        }
    }
}
exports.CapabilityStatement = CapabilityStatement;
class CarePlanDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('goal')) {
                this.goal = [];
                for (const o of obj.goal || []) {
                    this.goal.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('scheduled')) {
                this.scheduled = new Element(obj.scheduled);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('product')) {
                this.product = new Element(obj.product);
            }
            if (obj.hasOwnProperty('dailyAmount')) {
                this.dailyAmount = new SimpleQuantity(obj.dailyAmount);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.CarePlanDetailComponent = CarePlanDetailComponent;
class CarePlanActivityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('outcomeCodeableConcept')) {
                this.outcomeCodeableConcept = [];
                for (const o of obj.outcomeCodeableConcept || []) {
                    this.outcomeCodeableConcept.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('outcomeReference')) {
                this.outcomeReference = [];
                for (const o of obj.outcomeReference || []) {
                    this.outcomeReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('progress')) {
                this.progress = [];
                for (const o of obj.progress || []) {
                    this.progress.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = new CarePlanDetailComponent(obj.detail);
            }
        }
    }
}
exports.CarePlanActivityComponent = CarePlanActivityComponent;
class CarePlan extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CarePlan';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = [];
                for (const o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('contributor')) {
                this.contributor = [];
                for (const o of obj.contributor || []) {
                    this.contributor.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('careTeam')) {
                this.careTeam = [];
                for (const o of obj.careTeam || []) {
                    this.careTeam.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('addresses')) {
                this.addresses = [];
                for (const o of obj.addresses || []) {
                    this.addresses.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('supportingInfo')) {
                this.supportingInfo = [];
                for (const o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('goal')) {
                this.goal = [];
                for (const o of obj.goal || []) {
                    this.goal.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('activity')) {
                this.activity = [];
                for (const o of obj.activity || []) {
                    this.activity.push(new CarePlanActivityComponent(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CarePlan = CarePlan;
class CareTeamParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = [];
                for (const o of obj.role || []) {
                    this.role.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('member')) {
                this.member = new ResourceReference(obj.member);
            }
            if (obj.hasOwnProperty('onBehalfOf')) {
                this.onBehalfOf = new ResourceReference(obj.onBehalfOf);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.CareTeamParticipantComponent = CareTeamParticipantComponent;
class CareTeam extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CareTeam';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new CareTeamParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = [];
                for (const o of obj.managingOrganization || []) {
                    this.managingOrganization.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CareTeam = CareTeam;
class ChargeItemPerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.ChargeItemPerformerComponent = ChargeItemPerformerComponent;
class Money extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('currency')) {
                this.currency = obj.currency;
            }
        }
    }
}
exports.Money = Money;
class ChargeItem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ChargeItem';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ChargeItemPerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('performingOrganization')) {
                this.performingOrganization = new ResourceReference(obj.performingOrganization);
            }
            if (obj.hasOwnProperty('requestingOrganization')) {
                this.requestingOrganization = new ResourceReference(obj.requestingOrganization);
            }
            if (obj.hasOwnProperty('costCenter')) {
                this.costCenter = new ResourceReference(obj.costCenter);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('bodysite')) {
                this.bodysite = [];
                for (const o of obj.bodysite || []) {
                    this.bodysite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('factorOverride')) {
                this.factorOverride = obj.factorOverride;
            }
            if (obj.hasOwnProperty('priceOverride')) {
                this.priceOverride = new Money(obj.priceOverride);
            }
            if (obj.hasOwnProperty('overrideReason')) {
                this.overrideReason = obj.overrideReason;
            }
            if (obj.hasOwnProperty('enterer')) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.hasOwnProperty('enteredDate')) {
                this.enteredDate = new Date(obj.enteredDate);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('service')) {
                this.service = [];
                for (const o of obj.service || []) {
                    this.service.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('product')) {
                this.product = new Element(obj.product);
            }
            if (obj.hasOwnProperty('account')) {
                this.account = [];
                for (const o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ChargeItem = ChargeItem;
class ChargeItemDefinitionApplicabilityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.ChargeItemDefinitionApplicabilityComponent = ChargeItemDefinitionApplicabilityComponent;
class ChargeItemDefinitionPriceComponentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.ChargeItemDefinitionPriceComponentComponent = ChargeItemDefinitionPriceComponentComponent;
class ChargeItemDefinitionPropertyGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('applicability')) {
                this.applicability = [];
                for (const o of obj.applicability || []) {
                    this.applicability.push(new ChargeItemDefinitionApplicabilityComponent(o));
                }
            }
            if (obj.hasOwnProperty('priceComponent')) {
                this.priceComponent = [];
                for (const o of obj.priceComponent || []) {
                    this.priceComponent.push(new ChargeItemDefinitionPriceComponentComponent(o));
                }
            }
        }
    }
}
exports.ChargeItemDefinitionPropertyGroupComponent = ChargeItemDefinitionPropertyGroupComponent;
class ChargeItemDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ChargeItemDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('derivedFromUri')) {
                this.derivedFromUri = obj.derivedFromUri;
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = obj.partOf;
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = obj.replaces;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('instance')) {
                this.instance = [];
                for (const o of obj.instance || []) {
                    this.instance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('applicability')) {
                this.applicability = [];
                for (const o of obj.applicability || []) {
                    this.applicability.push(new ChargeItemDefinitionApplicabilityComponent(o));
                }
            }
            if (obj.hasOwnProperty('propertyGroup')) {
                this.propertyGroup = [];
                for (const o of obj.propertyGroup || []) {
                    this.propertyGroup.push(new ChargeItemDefinitionPropertyGroupComponent(o));
                }
            }
        }
    }
}
exports.ChargeItemDefinition = ChargeItemDefinition;
class ClaimRelatedClaimComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('claim')) {
                this.claim = new ResourceReference(obj.claim);
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = new Identifier(obj.reference);
            }
        }
    }
}
exports.ClaimRelatedClaimComponent = ClaimRelatedClaimComponent;
class ClaimPayeeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new Coding(obj.resource);
            }
            if (obj.hasOwnProperty('party')) {
                this.party = new ResourceReference(obj.party);
            }
        }
    }
}
exports.ClaimPayeeComponent = ClaimPayeeComponent;
class ClaimCareTeamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('responsible')) {
                this.responsible = obj.responsible;
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('qualification')) {
                this.qualification = new CodeableConcept(obj.qualification);
            }
        }
    }
}
exports.ClaimCareTeamComponent = ClaimCareTeamComponent;
class ClaimSpecialConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new CodeableConcept(obj.reason);
            }
        }
    }
}
exports.ClaimSpecialConditionComponent = ClaimSpecialConditionComponent;
class ClaimDiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = new Element(obj.diagnosis);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('onAdmission')) {
                this.onAdmission = new CodeableConcept(obj.onAdmission);
            }
            if (obj.hasOwnProperty('packageCode')) {
                this.packageCode = new CodeableConcept(obj.packageCode);
            }
        }
    }
}
exports.ClaimDiagnosisComponent = ClaimDiagnosisComponent;
class ClaimProcedureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = new Element(obj.procedure);
            }
        }
    }
}
exports.ClaimProcedureComponent = ClaimProcedureComponent;
class ClaimInsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('focal')) {
                this.focal = obj.focal;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.hasOwnProperty('businessArrangement')) {
                this.businessArrangement = obj.businessArrangement;
            }
            if (obj.hasOwnProperty('preAuthRef')) {
                this.preAuthRef = obj.preAuthRef;
            }
            if (obj.hasOwnProperty('claimResponse')) {
                this.claimResponse = new ResourceReference(obj.claimResponse);
            }
        }
    }
}
exports.ClaimInsuranceComponent = ClaimInsuranceComponent;
class ClaimAccidentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
        }
    }
}
exports.ClaimAccidentComponent = ClaimAccidentComponent;
class ClaimSubDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ClaimSubDetailComponent = ClaimSubDetailComponent;
class ClaimDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('subDetail')) {
                this.subDetail = [];
                for (const o of obj.subDetail || []) {
                    this.subDetail.push(new ClaimSubDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimDetailComponent = ClaimDetailComponent;
class ClaimItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('careTeamSequence')) {
                this.careTeamSequence = obj.careTeamSequence;
            }
            if (obj.hasOwnProperty('diagnosisSequence')) {
                this.diagnosisSequence = obj.diagnosisSequence;
            }
            if (obj.hasOwnProperty('procedureSequence')) {
                this.procedureSequence = obj.procedureSequence;
            }
            if (obj.hasOwnProperty('informationSequence')) {
                this.informationSequence = obj.informationSequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('subSite')) {
                this.subSite = [];
                for (const o of obj.subSite || []) {
                    this.subSite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = [];
                for (const o of obj.encounter || []) {
                    this.encounter.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ClaimDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimItemComponent = ClaimItemComponent;
class Claim extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Claim';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('billablePeriod')) {
                this.billablePeriod = new Period(obj.billablePeriod);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('enterer')) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.hasOwnProperty('fundsReserve')) {
                this.fundsReserve = new CodeableConcept(obj.fundsReserve);
            }
            if (obj.hasOwnProperty('related')) {
                this.related = [];
                for (const o of obj.related || []) {
                    this.related.push(new ClaimRelatedClaimComponent(o));
                }
            }
            if (obj.hasOwnProperty('prescription')) {
                this.prescription = new ResourceReference(obj.prescription);
            }
            if (obj.hasOwnProperty('originalPrescription')) {
                this.originalPrescription = new ResourceReference(obj.originalPrescription);
            }
            if (obj.hasOwnProperty('payee')) {
                this.payee = new ClaimPayeeComponent(obj.payee);
            }
            if (obj.hasOwnProperty('referral')) {
                this.referral = new ResourceReference(obj.referral);
            }
            if (obj.hasOwnProperty('facility')) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.hasOwnProperty('careTeam')) {
                this.careTeam = [];
                for (const o of obj.careTeam || []) {
                    this.careTeam.push(new ClaimCareTeamComponent(o));
                }
            }
            if (obj.hasOwnProperty('information')) {
                this.information = [];
                for (const o of obj.information || []) {
                    this.information.push(new ClaimSpecialConditionComponent(o));
                }
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = [];
                for (const o of obj.diagnosis || []) {
                    this.diagnosis.push(new ClaimDiagnosisComponent(o));
                }
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = [];
                for (const o of obj.procedure || []) {
                    this.procedure.push(new ClaimProcedureComponent(o));
                }
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ClaimInsuranceComponent(o));
                }
            }
            if (obj.hasOwnProperty('accident')) {
                this.accident = new ClaimAccidentComponent(obj.accident);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new ClaimItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('total')) {
                this.total = new Money(obj.total);
            }
        }
    }
}
exports.Claim = Claim;
class ClaimResponseAdjudicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.ClaimResponseAdjudicationComponent = ClaimResponseAdjudicationComponent;
class ClaimResponseSubDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('subDetailSequence')) {
                this.subDetailSequence = obj.subDetailSequence;
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseSubDetailComponent = ClaimResponseSubDetailComponent;
class ClaimResponseItemDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('detailSequence')) {
                this.detailSequence = obj.detailSequence;
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('subDetail')) {
                this.subDetail = [];
                for (const o of obj.subDetail || []) {
                    this.subDetail.push(new ClaimResponseSubDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseItemDetailComponent = ClaimResponseItemDetailComponent;
class ClaimResponseItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('itemSequence')) {
                this.itemSequence = obj.itemSequence;
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ClaimResponseItemDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseItemComponent = ClaimResponseItemComponent;
class ClaimResponseAddedItemSubDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseAddedItemSubDetailComponent = ClaimResponseAddedItemSubDetailComponent;
class ClaimResponseAddedItemDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('subDetail')) {
                this.subDetail = [];
                for (const o of obj.subDetail || []) {
                    this.subDetail.push(new ClaimResponseAddedItemSubDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseAddedItemDetailComponent = ClaimResponseAddedItemDetailComponent;
class ClaimResponseAddedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('itemSequence')) {
                this.itemSequence = obj.itemSequence;
            }
            if (obj.hasOwnProperty('detailSequence')) {
                this.detailSequence = obj.detailSequence;
            }
            if (obj.hasOwnProperty('subdetailSequence')) {
                this.subdetailSequence = obj.subdetailSequence;
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = [];
                for (const o of obj.provider || []) {
                    this.provider.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('subSite')) {
                this.subSite = [];
                for (const o of obj.subSite || []) {
                    this.subSite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ClaimResponseAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ClaimResponseAddedItemDetailComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponseAddedItemComponent = ClaimResponseAddedItemComponent;
class ClaimResponseErrorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('itemSequence')) {
                this.itemSequence = obj.itemSequence;
            }
            if (obj.hasOwnProperty('detailSequence')) {
                this.detailSequence = obj.detailSequence;
            }
            if (obj.hasOwnProperty('subDetailSequence')) {
                this.subDetailSequence = obj.subDetailSequence;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.ClaimResponseErrorComponent = ClaimResponseErrorComponent;
class ClaimResponseTotalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.ClaimResponseTotalComponent = ClaimResponseTotalComponent;
class ClaimResponsePaymentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('adjustment')) {
                this.adjustment = new Money(obj.adjustment);
            }
            if (obj.hasOwnProperty('adjustmentReason')) {
                this.adjustmentReason = new CodeableConcept(obj.adjustmentReason);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
        }
    }
}
exports.ClaimResponsePaymentComponent = ClaimResponsePaymentComponent;
class ClaimResponseNoteComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = new CodeableConcept(obj.language);
            }
        }
    }
}
exports.ClaimResponseNoteComponent = ClaimResponseNoteComponent;
class ClaimResponseInsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('focal')) {
                this.focal = obj.focal;
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.hasOwnProperty('businessArrangement')) {
                this.businessArrangement = obj.businessArrangement;
            }
            if (obj.hasOwnProperty('claimResponse')) {
                this.claimResponse = new ResourceReference(obj.claimResponse);
            }
        }
    }
}
exports.ClaimResponseInsuranceComponent = ClaimResponseInsuranceComponent;
class ClaimResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ClaimResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('requestProvider')) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('preAuthRef')) {
                this.preAuthRef = obj.preAuthRef;
            }
            if (obj.hasOwnProperty('payeeType')) {
                this.payeeType = new CodeableConcept(obj.payeeType);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new ClaimResponseItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('addItem')) {
                this.addItem = [];
                for (const o of obj.addItem || []) {
                    this.addItem.push(new ClaimResponseAddedItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('error')) {
                this.error = [];
                for (const o of obj.error || []) {
                    this.error.push(new ClaimResponseErrorComponent(o));
                }
            }
            if (obj.hasOwnProperty('total')) {
                this.total = [];
                for (const o of obj.total || []) {
                    this.total.push(new ClaimResponseTotalComponent(o));
                }
            }
            if (obj.hasOwnProperty('payment')) {
                this.payment = new ClaimResponsePaymentComponent(obj.payment);
            }
            if (obj.hasOwnProperty('reserved')) {
                this.reserved = new Coding(obj.reserved);
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('processNote')) {
                this.processNote = [];
                for (const o of obj.processNote || []) {
                    this.processNote.push(new ClaimResponseNoteComponent(o));
                }
            }
            if (obj.hasOwnProperty('communicationRequest')) {
                this.communicationRequest = [];
                for (const o of obj.communicationRequest || []) {
                    this.communicationRequest.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ClaimResponseInsuranceComponent(o));
                }
            }
        }
    }
}
exports.ClaimResponse = ClaimResponse;
class ClinicalImpressionInvestigationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ClinicalImpressionInvestigationComponent = ClinicalImpressionInvestigationComponent;
class ClinicalImpressionFindingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('itemCodeableConcept')) {
                this.itemCodeableConcept = new CodeableConcept(obj.itemCodeableConcept);
            }
            if (obj.hasOwnProperty('itemReference')) {
                this.itemReference = new ResourceReference(obj.itemReference);
            }
            if (obj.hasOwnProperty('basis')) {
                this.basis = obj.basis;
            }
        }
    }
}
exports.ClinicalImpressionFindingComponent = ClinicalImpressionFindingComponent;
class ClinicalImpression extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ClinicalImpression';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('effective')) {
                this.effective = new Element(obj.effective);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('assessor')) {
                this.assessor = new ResourceReference(obj.assessor);
            }
            if (obj.hasOwnProperty('previous')) {
                this.previous = new ResourceReference(obj.previous);
            }
            if (obj.hasOwnProperty('problem')) {
                this.problem = [];
                for (const o of obj.problem || []) {
                    this.problem.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('investigation')) {
                this.investigation = [];
                for (const o of obj.investigation || []) {
                    this.investigation.push(new ClinicalImpressionInvestigationComponent(o));
                }
            }
            if (obj.hasOwnProperty('protocol')) {
                this.protocol = obj.protocol;
            }
            if (obj.hasOwnProperty('summary')) {
                this.summary = obj.summary;
            }
            if (obj.hasOwnProperty('finding')) {
                this.finding = [];
                for (const o of obj.finding || []) {
                    this.finding.push(new ClinicalImpressionFindingComponent(o));
                }
            }
            if (obj.hasOwnProperty('prognosisCodeableConcept')) {
                this.prognosisCodeableConcept = [];
                for (const o of obj.prognosisCodeableConcept || []) {
                    this.prognosisCodeableConcept.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('prognosisReference')) {
                this.prognosisReference = [];
                for (const o of obj.prognosisReference || []) {
                    this.prognosisReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('supportingInfo')) {
                this.supportingInfo = [];
                for (const o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.ClinicalImpression = ClinicalImpression;
class CommunicationPayloadComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('content')) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.CommunicationPayloadComponent = CommunicationPayloadComponent;
class Communication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Communication';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('inResponseTo')) {
                this.inResponseTo = [];
                for (const o of obj.inResponseTo || []) {
                    this.inResponseTo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('medium')) {
                this.medium = [];
                for (const o of obj.medium || []) {
                    this.medium.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = new CodeableConcept(obj.topic);
            }
            if (obj.hasOwnProperty('about')) {
                this.about = [];
                for (const o of obj.about || []) {
                    this.about.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('sent')) {
                this.sent = new Date(obj.sent);
            }
            if (obj.hasOwnProperty('received')) {
                this.received = new Date(obj.received);
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = [];
                for (const o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('sender')) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('payload')) {
                this.payload = [];
                for (const o of obj.payload || []) {
                    this.payload.push(new CommunicationPayloadComponent(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Communication = Communication;
class CommunicationRequestPayloadComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('content')) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.CommunicationRequestPayloadComponent = CommunicationRequestPayloadComponent;
class CommunicationRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CommunicationRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = [];
                for (const o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('groupIdentifier')) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('medium')) {
                this.medium = [];
                for (const o of obj.medium || []) {
                    this.medium.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('about')) {
                this.about = [];
                for (const o of obj.about || []) {
                    this.about.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('payload')) {
                this.payload = [];
                for (const o of obj.payload || []) {
                    this.payload.push(new CommunicationRequestPayloadComponent(o));
                }
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = [];
                for (const o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('sender')) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.CommunicationRequest = CommunicationRequest;
class CompartmentDefinitionResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('param')) {
                this.param = obj.param;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.CompartmentDefinitionResourceComponent = CompartmentDefinitionResourceComponent;
class CompartmentDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CompartmentDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('search')) {
                this.search = obj.search;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = [];
                for (const o of obj.resource || []) {
                    this.resource.push(new CompartmentDefinitionResourceComponent(o));
                }
            }
        }
    }
}
exports.CompartmentDefinition = CompartmentDefinition;
class CompositionAttesterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Date(obj.time);
            }
            if (obj.hasOwnProperty('party')) {
                this.party = new ResourceReference(obj.party);
            }
        }
    }
}
exports.CompositionAttesterComponent = CompositionAttesterComponent;
class CompositionRelatesToComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new Element(obj.target);
            }
        }
    }
}
exports.CompositionRelatesToComponent = CompositionRelatesToComponent;
class CompositionEventComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.CompositionEventComponent = CompositionEventComponent;
class CompositionSectionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('text')) {
                this.text = new Narrative(obj.text);
            }
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('orderedBy')) {
                this.orderedBy = new CodeableConcept(obj.orderedBy);
            }
            if (obj.hasOwnProperty('entry')) {
                this.entry = [];
                for (const o of obj.entry || []) {
                    this.entry.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('emptyReason')) {
                this.emptyReason = new CodeableConcept(obj.emptyReason);
            }
            if (obj.hasOwnProperty('section')) {
                this.section = [];
                for (const o of obj.section || []) {
                    this.section.push(new CompositionSectionComponent(o));
                }
            }
        }
    }
}
exports.CompositionSectionComponent = CompositionSectionComponent;
class Composition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Composition';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('confidentiality')) {
                this.confidentiality = obj.confidentiality;
            }
            if (obj.hasOwnProperty('attester')) {
                this.attester = [];
                for (const o of obj.attester || []) {
                    this.attester.push(new CompositionAttesterComponent(o));
                }
            }
            if (obj.hasOwnProperty('custodian')) {
                this.custodian = new ResourceReference(obj.custodian);
            }
            if (obj.hasOwnProperty('relatesTo')) {
                this.relatesTo = [];
                for (const o of obj.relatesTo || []) {
                    this.relatesTo.push(new CompositionRelatesToComponent(o));
                }
            }
            if (obj.hasOwnProperty('event')) {
                this.event = [];
                for (const o of obj.event || []) {
                    this.event.push(new CompositionEventComponent(o));
                }
            }
            if (obj.hasOwnProperty('section')) {
                this.section = [];
                for (const o of obj.section || []) {
                    this.section.push(new CompositionSectionComponent(o));
                }
            }
        }
    }
}
exports.Composition = Composition;
class ConditionStageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('summary')) {
                this.summary = new CodeableConcept(obj.summary);
            }
            if (obj.hasOwnProperty('assessment')) {
                this.assessment = [];
                for (const o of obj.assessment || []) {
                    this.assessment.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
        }
    }
}
exports.ConditionStageComponent = ConditionStageComponent;
class ConditionEvidenceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ConditionEvidenceComponent = ConditionEvidenceComponent;
class Condition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Condition';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('clinicalStatus')) {
                this.clinicalStatus = new CodeableConcept(obj.clinicalStatus);
            }
            if (obj.hasOwnProperty('verificationStatus')) {
                this.verificationStatus = new CodeableConcept(obj.verificationStatus);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('severity')) {
                this.severity = new CodeableConcept(obj.severity);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = [];
                for (const o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('onset')) {
                this.onset = new Element(obj.onset);
            }
            if (obj.hasOwnProperty('abatement')) {
                this.abatement = new Element(obj.abatement);
            }
            if (obj.hasOwnProperty('recordedDate')) {
                this.recordedDate = new Date(obj.recordedDate);
            }
            if (obj.hasOwnProperty('recorder')) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.hasOwnProperty('asserter')) {
                this.asserter = new ResourceReference(obj.asserter);
            }
            if (obj.hasOwnProperty('stage')) {
                this.stage = [];
                for (const o of obj.stage || []) {
                    this.stage.push(new ConditionStageComponent(o));
                }
            }
            if (obj.hasOwnProperty('evidence')) {
                this.evidence = [];
                for (const o of obj.evidence || []) {
                    this.evidence.push(new ConditionEvidenceComponent(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Condition = Condition;
class ConsentPolicyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('authority')) {
                this.authority = obj.authority;
            }
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
        }
    }
}
exports.ConsentPolicyComponent = ConsentPolicyComponent;
class ConsentVerificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('verified')) {
                this.verified = obj.verified;
            }
            if (obj.hasOwnProperty('verifiedWith')) {
                this.verifiedWith = new ResourceReference(obj.verifiedWith);
            }
            if (obj.hasOwnProperty('verificationDate')) {
                this.verificationDate = new Date(obj.verificationDate);
            }
        }
    }
}
exports.ConsentVerificationComponent = ConsentVerificationComponent;
class ConsentprovisionActorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.ConsentprovisionActorComponent = ConsentprovisionActorComponent;
class ConsentprovisionDataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('meaning')) {
                this.meaning = obj.meaning;
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
        }
    }
}
exports.ConsentprovisionDataComponent = ConsentprovisionDataComponent;
class ConsentprovisionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = [];
                for (const o of obj.actor || []) {
                    this.actor.push(new ConsentprovisionActorComponent(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('securityLabel')) {
                this.securityLabel = [];
                for (const o of obj.securityLabel || []) {
                    this.securityLabel.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = [];
                for (const o of obj.purpose || []) {
                    this.purpose.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('class')) {
                this.class = [];
                for (const o of obj.class || []) {
                    this.class.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('dataPeriod')) {
                this.dataPeriod = new Period(obj.dataPeriod);
            }
            if (obj.hasOwnProperty('data')) {
                this.data = [];
                for (const o of obj.data || []) {
                    this.data.push(new ConsentprovisionDataComponent(o));
                }
            }
            if (obj.hasOwnProperty('provision')) {
                this.provision = [];
                for (const o of obj.provision || []) {
                    this.provision.push(new ConsentprovisionComponent(o));
                }
            }
        }
    }
}
exports.ConsentprovisionComponent = ConsentprovisionComponent;
class Consent extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Consent';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('scope')) {
                this.scope = new CodeableConcept(obj.scope);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('dateTime')) {
                this.dateTime = new Date(obj.dateTime);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = [];
                for (const o of obj.organization || []) {
                    this.organization.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new Element(obj.source);
            }
            if (obj.hasOwnProperty('policy')) {
                this.policy = [];
                for (const o of obj.policy || []) {
                    this.policy.push(new ConsentPolicyComponent(o));
                }
            }
            if (obj.hasOwnProperty('policyRule')) {
                this.policyRule = new CodeableConcept(obj.policyRule);
            }
            if (obj.hasOwnProperty('verification')) {
                this.verification = [];
                for (const o of obj.verification || []) {
                    this.verification.push(new ConsentVerificationComponent(o));
                }
            }
            if (obj.hasOwnProperty('provision')) {
                this.provision = new ConsentprovisionComponent(obj.provision);
            }
        }
    }
}
exports.Consent = Consent;
class ContractContentDefinitionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = new ResourceReference(obj.publisher);
            }
            if (obj.hasOwnProperty('publicationDate')) {
                this.publicationDate = new Date(obj.publicationDate);
            }
            if (obj.hasOwnProperty('publicationStatus')) {
                this.publicationStatus = obj.publicationStatus;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
        }
    }
}
exports.ContractContentDefinitionComponent = ContractContentDefinitionComponent;
class ContractSecurityLabelComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = new Coding(obj.classification);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('control')) {
                this.control = [];
                for (const o of obj.control || []) {
                    this.control.push(new Coding(o));
                }
            }
        }
    }
}
exports.ContractSecurityLabelComponent = ContractSecurityLabelComponent;
class ContractContractPartyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = [];
                for (const o of obj.reference || []) {
                    this.reference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
        }
    }
}
exports.ContractContractPartyComponent = ContractContractPartyComponent;
class ContractAnswerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.ContractAnswerComponent = ContractAnswerComponent;
class ContractContractOfferComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('party')) {
                this.party = [];
                for (const o of obj.party || []) {
                    this.party.push(new ContractContractPartyComponent(o));
                }
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = new ResourceReference(obj.topic);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('decision')) {
                this.decision = new CodeableConcept(obj.decision);
            }
            if (obj.hasOwnProperty('decisionMode')) {
                this.decisionMode = [];
                for (const o of obj.decisionMode || []) {
                    this.decisionMode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('answer')) {
                this.answer = [];
                for (const o of obj.answer || []) {
                    this.answer.push(new ContractAnswerComponent(o));
                }
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('securityLabelNumber')) {
                this.securityLabelNumber = obj.securityLabelNumber;
            }
        }
    }
}
exports.ContractContractOfferComponent = ContractContractOfferComponent;
class ContractAssetContextComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.ContractAssetContextComponent = ContractAssetContextComponent;
class ContractValuedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('entity')) {
                this.entity = new Element(obj.entity);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('effectiveTime')) {
                this.effectiveTime = new Date(obj.effectiveTime);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('points')) {
                this.points = obj.points;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('payment')) {
                this.payment = obj.payment;
            }
            if (obj.hasOwnProperty('paymentDate')) {
                this.paymentDate = new Date(obj.paymentDate);
            }
            if (obj.hasOwnProperty('responsible')) {
                this.responsible = new ResourceReference(obj.responsible);
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = new ResourceReference(obj.recipient);
            }
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('securityLabelNumber')) {
                this.securityLabelNumber = obj.securityLabelNumber;
            }
        }
    }
}
exports.ContractValuedItemComponent = ContractValuedItemComponent;
class ContractContractAssetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('scope')) {
                this.scope = new CodeableConcept(obj.scope);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('typeReference')) {
                this.typeReference = [];
                for (const o of obj.typeReference || []) {
                    this.typeReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('subtype')) {
                this.subtype = [];
                for (const o of obj.subtype || []) {
                    this.subtype.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new Coding(obj.relationship);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = [];
                for (const o of obj.context || []) {
                    this.context.push(new ContractAssetContextComponent(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = obj.condition;
            }
            if (obj.hasOwnProperty('periodType')) {
                this.periodType = [];
                for (const o of obj.periodType || []) {
                    this.periodType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = [];
                for (const o of obj.period || []) {
                    this.period.push(new Period(o));
                }
            }
            if (obj.hasOwnProperty('usePeriod')) {
                this.usePeriod = [];
                for (const o of obj.usePeriod || []) {
                    this.usePeriod.push(new Period(o));
                }
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('answer')) {
                this.answer = [];
                for (const o of obj.answer || []) {
                    this.answer.push(new ContractAnswerComponent(o));
                }
            }
            if (obj.hasOwnProperty('securityLabelNumber')) {
                this.securityLabelNumber = obj.securityLabelNumber;
            }
            if (obj.hasOwnProperty('valuedItem')) {
                this.valuedItem = [];
                for (const o of obj.valuedItem || []) {
                    this.valuedItem.push(new ContractValuedItemComponent(o));
                }
            }
        }
    }
}
exports.ContractContractAssetComponent = ContractContractAssetComponent;
class ContractActionSubjectComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = [];
                for (const o of obj.reference || []) {
                    this.reference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
        }
    }
}
exports.ContractActionSubjectComponent = ContractActionSubjectComponent;
class ContractActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ContractActionSubjectComponent(o));
                }
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = new CodeableConcept(obj.intent);
            }
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('contextLinkId')) {
                this.contextLinkId = obj.contextLinkId;
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = [];
                for (const o of obj.requester || []) {
                    this.requester.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('requesterLinkId')) {
                this.requesterLinkId = obj.requesterLinkId;
            }
            if (obj.hasOwnProperty('performerType')) {
                this.performerType = [];
                for (const o of obj.performerType || []) {
                    this.performerType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('performerRole')) {
                this.performerRole = new CodeableConcept(obj.performerRole);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('performerLinkId')) {
                this.performerLinkId = obj.performerLinkId;
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = obj.reason;
            }
            if (obj.hasOwnProperty('reasonLinkId')) {
                this.reasonLinkId = obj.reasonLinkId;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('securityLabelNumber')) {
                this.securityLabelNumber = obj.securityLabelNumber;
            }
        }
    }
}
exports.ContractActionComponent = ContractActionComponent;
class ContractTermComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('applies')) {
                this.applies = new Period(obj.applies);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = new Element(obj.topic);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('securityLabel')) {
                this.securityLabel = [];
                for (const o of obj.securityLabel || []) {
                    this.securityLabel.push(new ContractSecurityLabelComponent(o));
                }
            }
            if (obj.hasOwnProperty('offer')) {
                this.offer = new ContractContractOfferComponent(obj.offer);
            }
            if (obj.hasOwnProperty('asset')) {
                this.asset = [];
                for (const o of obj.asset || []) {
                    this.asset.push(new ContractContractAssetComponent(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new ContractActionComponent(o));
                }
            }
            if (obj.hasOwnProperty('group')) {
                this.group = [];
                for (const o of obj.group || []) {
                    this.group.push(new ContractTermComponent(o));
                }
            }
        }
    }
}
exports.ContractTermComponent = ContractTermComponent;
class ContractSignatoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('party')) {
                this.party = new ResourceReference(obj.party);
            }
            if (obj.hasOwnProperty('signature')) {
                this.signature = [];
                for (const o of obj.signature || []) {
                    this.signature.push(new Signature(o));
                }
            }
        }
    }
}
exports.ContractSignatoryComponent = ContractSignatoryComponent;
class ContractFriendlyLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('content')) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.ContractFriendlyLanguageComponent = ContractFriendlyLanguageComponent;
class ContractLegalLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('content')) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.ContractLegalLanguageComponent = ContractLegalLanguageComponent;
class ContractComputableLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('content')) {
                this.content = new Element(obj.content);
            }
        }
    }
}
exports.ContractComputableLanguageComponent = ContractComputableLanguageComponent;
class Contract extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Contract';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('legalState')) {
                this.legalState = new CodeableConcept(obj.legalState);
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = new ResourceReference(obj.instantiatesCanonical);
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('contentDerivative')) {
                this.contentDerivative = new CodeableConcept(obj.contentDerivative);
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('applies')) {
                this.applies = new Period(obj.applies);
            }
            if (obj.hasOwnProperty('expirationType')) {
                this.expirationType = new CodeableConcept(obj.expirationType);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('authority')) {
                this.authority = [];
                for (const o of obj.authority || []) {
                    this.authority.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('domain')) {
                this.domain = [];
                for (const o of obj.domain || []) {
                    this.domain.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('site')) {
                this.site = [];
                for (const o of obj.site || []) {
                    this.site.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('scope')) {
                this.scope = new CodeableConcept(obj.scope);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = new Element(obj.topic);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = [];
                for (const o of obj.subType || []) {
                    this.subType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('contentDefinition')) {
                this.contentDefinition = new ContractContentDefinitionComponent(obj.contentDefinition);
            }
            if (obj.hasOwnProperty('term')) {
                this.term = [];
                for (const o of obj.term || []) {
                    this.term.push(new ContractTermComponent(o));
                }
            }
            if (obj.hasOwnProperty('supportingInfo')) {
                this.supportingInfo = [];
                for (const o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('relevantHistory')) {
                this.relevantHistory = [];
                for (const o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('signer')) {
                this.signer = [];
                for (const o of obj.signer || []) {
                    this.signer.push(new ContractSignatoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('friendly')) {
                this.friendly = [];
                for (const o of obj.friendly || []) {
                    this.friendly.push(new ContractFriendlyLanguageComponent(o));
                }
            }
            if (obj.hasOwnProperty('legal')) {
                this.legal = [];
                for (const o of obj.legal || []) {
                    this.legal.push(new ContractLegalLanguageComponent(o));
                }
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new ContractComputableLanguageComponent(o));
                }
            }
            if (obj.hasOwnProperty('legallyBinding')) {
                this.legallyBinding = new Element(obj.legallyBinding);
            }
        }
    }
}
exports.Contract = Contract;
class Contributor extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
        }
    }
}
exports.Contributor = Contributor;
class Count extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Count = Count;
class CoverageClassComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
        }
    }
}
exports.CoverageClassComponent = CoverageClassComponent;
class CoverageCoPayComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Quantity(obj.value);
            }
        }
    }
}
exports.CoverageCoPayComponent = CoverageCoPayComponent;
class Coverage extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Coverage';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('policyHolder')) {
                this.policyHolder = new ResourceReference(obj.policyHolder);
            }
            if (obj.hasOwnProperty('subscriber')) {
                this.subscriber = new ResourceReference(obj.subscriber);
            }
            if (obj.hasOwnProperty('subscriberId')) {
                this.subscriberId = obj.subscriberId;
            }
            if (obj.hasOwnProperty('beneficiary')) {
                this.beneficiary = new ResourceReference(obj.beneficiary);
            }
            if (obj.hasOwnProperty('dependent')) {
                this.dependent = obj.dependent;
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('payor')) {
                this.payor = [];
                for (const o of obj.payor || []) {
                    this.payor.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('class')) {
                this.class = [];
                for (const o of obj.class || []) {
                    this.class.push(new CoverageClassComponent(o));
                }
            }
            if (obj.hasOwnProperty('order')) {
                this.order = obj.order;
            }
            if (obj.hasOwnProperty('network')) {
                this.network = obj.network;
            }
            if (obj.hasOwnProperty('copay')) {
                this.copay = [];
                for (const o of obj.copay || []) {
                    this.copay.push(new CoverageCoPayComponent(o));
                }
            }
            if (obj.hasOwnProperty('contract')) {
                this.contract = [];
                for (const o of obj.contract || []) {
                    this.contract.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Coverage = Coverage;
class CoverageEligibilityRequestInformationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('information')) {
                this.information = new ResourceReference(obj.information);
            }
            if (obj.hasOwnProperty('appliesToAll')) {
                this.appliesToAll = obj.appliesToAll;
            }
        }
    }
}
exports.CoverageEligibilityRequestInformationComponent = CoverageEligibilityRequestInformationComponent;
class CoverageEligibilityRequestInsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('focal')) {
                this.focal = obj.focal;
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.hasOwnProperty('businessArrangement')) {
                this.businessArrangement = obj.businessArrangement;
            }
        }
    }
}
exports.CoverageEligibilityRequestInsuranceComponent = CoverageEligibilityRequestInsuranceComponent;
class CoverageEligibilityRequestDiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = new Element(obj.diagnosis);
            }
        }
    }
}
exports.CoverageEligibilityRequestDiagnosisComponent = CoverageEligibilityRequestDiagnosisComponent;
class CoverageEligibilityRequestDetailsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('supportingInformationSequence')) {
                this.supportingInformationSequence = obj.supportingInformationSequence;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('facility')) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = [];
                for (const o of obj.diagnosis || []) {
                    this.diagnosis.push(new CoverageEligibilityRequestDiagnosisComponent(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.CoverageEligibilityRequestDetailsComponent = CoverageEligibilityRequestDetailsComponent;
class CoverageEligibilityRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CoverageEligibilityRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('enterer')) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('facility')) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new CoverageEligibilityRequestInformationComponent(o));
                }
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new CoverageEligibilityRequestInsuranceComponent(o));
                }
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new CoverageEligibilityRequestDetailsComponent(o));
                }
            }
        }
    }
}
exports.CoverageEligibilityRequest = CoverageEligibilityRequest;
class CoverageEligibilityResponseBenefitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('allowed')) {
                this.allowed = new Element(obj.allowed);
            }
            if (obj.hasOwnProperty('used')) {
                this.used = new Element(obj.used);
            }
        }
    }
}
exports.CoverageEligibilityResponseBenefitComponent = CoverageEligibilityResponseBenefitComponent;
class CoverageEligibilityResponseItemsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('excluded')) {
                this.excluded = obj.excluded;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('network')) {
                this.network = new CodeableConcept(obj.network);
            }
            if (obj.hasOwnProperty('unit')) {
                this.unit = new CodeableConcept(obj.unit);
            }
            if (obj.hasOwnProperty('term')) {
                this.term = new CodeableConcept(obj.term);
            }
            if (obj.hasOwnProperty('benefit')) {
                this.benefit = [];
                for (const o of obj.benefit || []) {
                    this.benefit.push(new CoverageEligibilityResponseBenefitComponent(o));
                }
            }
            if (obj.hasOwnProperty('authorizationRequired')) {
                this.authorizationRequired = obj.authorizationRequired;
            }
            if (obj.hasOwnProperty('authorizationSupporting')) {
                this.authorizationSupporting = [];
                for (const o of obj.authorizationSupporting || []) {
                    this.authorizationSupporting.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('authorizationUrl')) {
                this.authorizationUrl = obj.authorizationUrl;
            }
        }
    }
}
exports.CoverageEligibilityResponseItemsComponent = CoverageEligibilityResponseItemsComponent;
class CoverageEligibilityResponseInsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
            if (obj.hasOwnProperty('contract')) {
                this.contract = new ResourceReference(obj.contract);
            }
            if (obj.hasOwnProperty('inforce')) {
                this.inforce = obj.inforce;
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new CoverageEligibilityResponseItemsComponent(o));
                }
            }
        }
    }
}
exports.CoverageEligibilityResponseInsuranceComponent = CoverageEligibilityResponseInsuranceComponent;
class CoverageEligibilityResponseErrorsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.CoverageEligibilityResponseErrorsComponent = CoverageEligibilityResponseErrorsComponent;
class CoverageEligibilityResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'CoverageEligibilityResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('requestProvider')) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new CoverageEligibilityResponseInsuranceComponent(o));
                }
            }
            if (obj.hasOwnProperty('preAuthRef')) {
                this.preAuthRef = obj.preAuthRef;
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('error')) {
                this.error = [];
                for (const o of obj.error || []) {
                    this.error.push(new CoverageEligibilityResponseErrorsComponent(o));
                }
            }
        }
    }
}
exports.CoverageEligibilityResponse = CoverageEligibilityResponse;
class DataElement {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.DataElement = DataElement;
class DataRequirementCodeFilterComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('searchParam')) {
                this.searchParam = obj.searchParam;
            }
            if (obj.hasOwnProperty('valueSet')) {
                this.valueSet = obj.valueSet;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
        }
    }
}
exports.DataRequirementCodeFilterComponent = DataRequirementCodeFilterComponent;
class DataRequirementDateFilterComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('searchParam')) {
                this.searchParam = obj.searchParam;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.DataRequirementDateFilterComponent = DataRequirementDateFilterComponent;
class DataRequirementSortComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('direction')) {
                this.direction = obj.direction;
            }
        }
    }
}
exports.DataRequirementSortComponent = DataRequirementSortComponent;
class DataRequirement extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('mustSupport')) {
                this.mustSupport = obj.mustSupport;
            }
            if (obj.hasOwnProperty('codeFilter')) {
                this.codeFilter = [];
                for (const o of obj.codeFilter || []) {
                    this.codeFilter.push(new DataRequirementCodeFilterComponent(o));
                }
            }
            if (obj.hasOwnProperty('dateFilter')) {
                this.dateFilter = [];
                for (const o of obj.dateFilter || []) {
                    this.dateFilter.push(new DataRequirementDateFilterComponent(o));
                }
            }
            if (obj.hasOwnProperty('limit')) {
                this.limit = obj.limit;
            }
            if (obj.hasOwnProperty('sort')) {
                this.sort = [];
                for (const o of obj.sort || []) {
                    this.sort.push(new DataRequirementSortComponent(o));
                }
            }
        }
    }
}
exports.DataRequirement = DataRequirement;
class DetectedIssueMitigationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = new CodeableConcept(obj.action);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
        }
    }
}
exports.DetectedIssueMitigationComponent = DetectedIssueMitigationComponent;
class DetectedIssue extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DetectedIssue';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('severity')) {
                this.severity = obj.severity;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('implicated')) {
                this.implicated = [];
                for (const o of obj.implicated || []) {
                    this.implicated.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = obj.detail;
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = obj.reference;
            }
            if (obj.hasOwnProperty('mitigation')) {
                this.mitigation = [];
                for (const o of obj.mitigation || []) {
                    this.mitigation.push(new DetectedIssueMitigationComponent(o));
                }
            }
        }
    }
}
exports.DetectedIssue = DetectedIssue;
class DeviceUdiCarrierComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('deviceIdentifier')) {
                this.deviceIdentifier = obj.deviceIdentifier;
            }
            if (obj.hasOwnProperty('issuer')) {
                this.issuer = obj.issuer;
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = obj.jurisdiction;
            }
            if (obj.hasOwnProperty('carrierAIDC')) {
                this.carrierAIDC = obj.carrierAIDC;
            }
            if (obj.hasOwnProperty('carrierHRF')) {
                this.carrierHRF = obj.carrierHRF;
            }
            if (obj.hasOwnProperty('entryType')) {
                this.entryType = obj.entryType;
            }
        }
    }
}
exports.DeviceUdiCarrierComponent = DeviceUdiCarrierComponent;
class DeviceDeviceNameComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
        }
    }
}
exports.DeviceDeviceNameComponent = DeviceDeviceNameComponent;
class DeviceSpecializationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('systemType')) {
                this.systemType = new CodeableConcept(obj.systemType);
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
        }
    }
}
exports.DeviceSpecializationComponent = DeviceSpecializationComponent;
class DeviceVersionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('component')) {
                this.component = new Identifier(obj.component);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.DeviceVersionComponent = DeviceVersionComponent;
class DevicePropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('valueQuanity')) {
                this.valueQuanity = [];
                for (const o of obj.valueQuanity || []) {
                    this.valueQuanity.push(new Quantity(o));
                }
            }
            if (obj.hasOwnProperty('valueCode')) {
                this.valueCode = [];
                for (const o of obj.valueCode || []) {
                    this.valueCode.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.DevicePropertyComponent = DevicePropertyComponent;
class Device extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Device';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = new ResourceReference(obj.definition);
            }
            if (obj.hasOwnProperty('udiCarrier')) {
                this.udiCarrier = [];
                for (const o of obj.udiCarrier || []) {
                    this.udiCarrier.push(new DeviceUdiCarrierComponent(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = [];
                for (const o of obj.statusReason || []) {
                    this.statusReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('distinctIdentificationCode')) {
                this.distinctIdentificationCode = obj.distinctIdentificationCode;
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = obj.manufacturer;
            }
            if (obj.hasOwnProperty('manufactureDate')) {
                this.manufactureDate = new Date(obj.manufactureDate);
            }
            if (obj.hasOwnProperty('expirationDate')) {
                this.expirationDate = new Date(obj.expirationDate);
            }
            if (obj.hasOwnProperty('lotNumber')) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.hasOwnProperty('serialNumber')) {
                this.serialNumber = obj.serialNumber;
            }
            if (obj.hasOwnProperty('deviceName')) {
                this.deviceName = [];
                for (const o of obj.deviceName || []) {
                    this.deviceName.push(new DeviceDeviceNameComponent(o));
                }
            }
            if (obj.hasOwnProperty('modelNumber')) {
                this.modelNumber = obj.modelNumber;
            }
            if (obj.hasOwnProperty('partNumber')) {
                this.partNumber = obj.partNumber;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('specialization')) {
                this.specialization = [];
                for (const o of obj.specialization || []) {
                    this.specialization.push(new DeviceSpecializationComponent(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = [];
                for (const o of obj.version || []) {
                    this.version.push(new DeviceVersionComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = [];
                for (const o of obj.property || []) {
                    this.property.push(new DevicePropertyComponent(o));
                }
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('owner')) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('safety')) {
                this.safety = [];
                for (const o of obj.safety || []) {
                    this.safety.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = new ResourceReference(obj.parent);
            }
        }
    }
}
exports.Device = Device;
class DeviceDefinitionUdiDeviceIdentifierComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('deviceIdentifier')) {
                this.deviceIdentifier = obj.deviceIdentifier;
            }
            if (obj.hasOwnProperty('issuer')) {
                this.issuer = obj.issuer;
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = obj.jurisdiction;
            }
        }
    }
}
exports.DeviceDefinitionUdiDeviceIdentifierComponent = DeviceDefinitionUdiDeviceIdentifierComponent;
class DeviceDefinitionDeviceNameComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
        }
    }
}
exports.DeviceDefinitionDeviceNameComponent = DeviceDefinitionDeviceNameComponent;
class DeviceDefinitionSpecializationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('systemType')) {
                this.systemType = obj.systemType;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
        }
    }
}
exports.DeviceDefinitionSpecializationComponent = DeviceDefinitionSpecializationComponent;
class ProductShelfLife extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Quantity(obj.period);
            }
            if (obj.hasOwnProperty('specialPrecautionsForStorage')) {
                this.specialPrecautionsForStorage = [];
                for (const o of obj.specialPrecautionsForStorage || []) {
                    this.specialPrecautionsForStorage.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.ProductShelfLife = ProductShelfLife;
class ProdCharacteristic extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('height')) {
                this.height = new Quantity(obj.height);
            }
            if (obj.hasOwnProperty('width')) {
                this.width = new Quantity(obj.width);
            }
            if (obj.hasOwnProperty('depth')) {
                this.depth = new Quantity(obj.depth);
            }
            if (obj.hasOwnProperty('weight')) {
                this.weight = new Quantity(obj.weight);
            }
            if (obj.hasOwnProperty('nominalVolume')) {
                this.nominalVolume = new Quantity(obj.nominalVolume);
            }
            if (obj.hasOwnProperty('externalDiameter')) {
                this.externalDiameter = new Quantity(obj.externalDiameter);
            }
            if (obj.hasOwnProperty('shape')) {
                this.shape = obj.shape;
            }
            if (obj.hasOwnProperty('color')) {
                this.color = obj.color;
            }
            if (obj.hasOwnProperty('imprint')) {
                this.imprint = obj.imprint;
            }
            if (obj.hasOwnProperty('image')) {
                this.image = [];
                for (const o of obj.image || []) {
                    this.image.push(new Attachment(o));
                }
            }
            if (obj.hasOwnProperty('scoring')) {
                this.scoring = new CodeableConcept(obj.scoring);
            }
        }
    }
}
exports.ProdCharacteristic = ProdCharacteristic;
class DeviceDefinitionCapabilityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = [];
                for (const o of obj.description || []) {
                    this.description.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.DeviceDefinitionCapabilityComponent = DeviceDefinitionCapabilityComponent;
class DeviceDefinitionPropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('valueQuanity')) {
                this.valueQuanity = [];
                for (const o of obj.valueQuanity || []) {
                    this.valueQuanity.push(new Quantity(o));
                }
            }
            if (obj.hasOwnProperty('valueCode')) {
                this.valueCode = [];
                for (const o of obj.valueCode || []) {
                    this.valueCode.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.DeviceDefinitionPropertyComponent = DeviceDefinitionPropertyComponent;
class DeviceDefinitionMaterialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('substance')) {
                this.substance = new CodeableConcept(obj.substance);
            }
            if (obj.hasOwnProperty('alternate')) {
                this.alternate = obj.alternate;
            }
            if (obj.hasOwnProperty('allergenicIndicator')) {
                this.allergenicIndicator = obj.allergenicIndicator;
            }
        }
    }
}
exports.DeviceDefinitionMaterialComponent = DeviceDefinitionMaterialComponent;
class DeviceDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceDefinition';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('udiDeviceIdentifier')) {
                this.udiDeviceIdentifier = [];
                for (const o of obj.udiDeviceIdentifier || []) {
                    this.udiDeviceIdentifier.push(new DeviceDefinitionUdiDeviceIdentifierComponent(o));
                }
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = new Element(obj.manufacturer);
            }
            if (obj.hasOwnProperty('deviceName')) {
                this.deviceName = [];
                for (const o of obj.deviceName || []) {
                    this.deviceName.push(new DeviceDefinitionDeviceNameComponent(o));
                }
            }
            if (obj.hasOwnProperty('modelNumber')) {
                this.modelNumber = obj.modelNumber;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('specialization')) {
                this.specialization = [];
                for (const o of obj.specialization || []) {
                    this.specialization.push(new DeviceDefinitionSpecializationComponent(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('safety')) {
                this.safety = [];
                for (const o of obj.safety || []) {
                    this.safety.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('shelfLifeStorage')) {
                this.shelfLifeStorage = [];
                for (const o of obj.shelfLifeStorage || []) {
                    this.shelfLifeStorage.push(new ProductShelfLife(o));
                }
            }
            if (obj.hasOwnProperty('physicalCharacteristics')) {
                this.physicalCharacteristics = new ProdCharacteristic(obj.physicalCharacteristics);
            }
            if (obj.hasOwnProperty('languageCode')) {
                this.languageCode = [];
                for (const o of obj.languageCode || []) {
                    this.languageCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('capability')) {
                this.capability = [];
                for (const o of obj.capability || []) {
                    this.capability.push(new DeviceDefinitionCapabilityComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = [];
                for (const o of obj.property || []) {
                    this.property.push(new DeviceDefinitionPropertyComponent(o));
                }
            }
            if (obj.hasOwnProperty('owner')) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('onlineInformation')) {
                this.onlineInformation = obj.onlineInformation;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('parentDevice')) {
                this.parentDevice = new ResourceReference(obj.parentDevice);
            }
            if (obj.hasOwnProperty('material')) {
                this.material = [];
                for (const o of obj.material || []) {
                    this.material.push(new DeviceDefinitionMaterialComponent(o));
                }
            }
        }
    }
}
exports.DeviceDefinition = DeviceDefinition;
class DeviceMetricCalibrationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('state')) {
                this.state = obj.state;
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Date(obj.time);
            }
        }
    }
}
exports.DeviceMetricCalibrationComponent = DeviceMetricCalibrationComponent;
class DeviceMetric extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceMetric';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('unit')) {
                this.unit = new CodeableConcept(obj.unit);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.hasOwnProperty('operationalStatus')) {
                this.operationalStatus = obj.operationalStatus;
            }
            if (obj.hasOwnProperty('color')) {
                this.color = obj.color;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = obj.category;
            }
            if (obj.hasOwnProperty('measurementPeriod')) {
                this.measurementPeriod = new Timing(obj.measurementPeriod);
            }
            if (obj.hasOwnProperty('calibration')) {
                this.calibration = [];
                for (const o of obj.calibration || []) {
                    this.calibration.push(new DeviceMetricCalibrationComponent(o));
                }
            }
        }
    }
}
exports.DeviceMetric = DeviceMetric;
class DeviceRequestParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.DeviceRequestParameterComponent = DeviceRequestParameterComponent;
class DeviceRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('priorRequest')) {
                this.priorRequest = [];
                for (const o of obj.priorRequest || []) {
                    this.priorRequest.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('groupIdentifier')) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new Element(obj.code);
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new DeviceRequestParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('performerType')) {
                this.performerType = new CodeableConcept(obj.performerType);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('supportingInfo')) {
                this.supportingInfo = [];
                for (const o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('relevantHistory')) {
                this.relevantHistory = [];
                for (const o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.DeviceRequest = DeviceRequest;
class DeviceUseStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DeviceUseStatement';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('derivedFrom')) {
                this.derivedFrom = [];
                for (const o of obj.derivedFrom || []) {
                    this.derivedFrom.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('recordedOn')) {
                this.recordedOn = new Date(obj.recordedOn);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('device')) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.DeviceUseStatement = DeviceUseStatement;
class DiagnosticReportMediaComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('link')) {
                this.link = new ResourceReference(obj.link);
            }
        }
    }
}
exports.DiagnosticReportMediaComponent = DiagnosticReportMediaComponent;
class DiagnosticReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DiagnosticReport';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('effective')) {
                this.effective = new Element(obj.effective);
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('resultsInterpreter')) {
                this.resultsInterpreter = [];
                for (const o of obj.resultsInterpreter || []) {
                    this.resultsInterpreter.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('specimen')) {
                this.specimen = [];
                for (const o of obj.specimen || []) {
                    this.specimen.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('result')) {
                this.result = [];
                for (const o of obj.result || []) {
                    this.result.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('imagingStudy')) {
                this.imagingStudy = [];
                for (const o of obj.imagingStudy || []) {
                    this.imagingStudy.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('media')) {
                this.media = [];
                for (const o of obj.media || []) {
                    this.media.push(new DiagnosticReportMediaComponent(o));
                }
            }
            if (obj.hasOwnProperty('conclusion')) {
                this.conclusion = obj.conclusion;
            }
            if (obj.hasOwnProperty('conclusionCode')) {
                this.conclusionCode = [];
                for (const o of obj.conclusionCode || []) {
                    this.conclusionCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('presentedForm')) {
                this.presentedForm = [];
                for (const o of obj.presentedForm || []) {
                    this.presentedForm.push(new Attachment(o));
                }
            }
        }
    }
}
exports.DiagnosticReport = DiagnosticReport;
class Distance extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Distance = Distance;
class DocumentManifestAgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('who')) {
                this.who = new ResourceReference(obj.who);
            }
        }
    }
}
exports.DocumentManifestAgentComponent = DocumentManifestAgentComponent;
class DocumentManifestRelatedComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('ref')) {
                this.ref = new ResourceReference(obj.ref);
            }
        }
    }
}
exports.DocumentManifestRelatedComponent = DocumentManifestRelatedComponent;
class DocumentManifest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DocumentManifest';
        if (obj) {
            if (obj.hasOwnProperty('masterIdentifier')) {
                this.masterIdentifier = new Identifier(obj.masterIdentifier);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('agent')) {
                this.agent = [];
                for (const o of obj.agent || []) {
                    this.agent.push(new DocumentManifestAgentComponent(o));
                }
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = [];
                for (const o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('content')) {
                this.content = [];
                for (const o of obj.content || []) {
                    this.content.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('related')) {
                this.related = [];
                for (const o of obj.related || []) {
                    this.related.push(new DocumentManifestRelatedComponent(o));
                }
            }
        }
    }
}
exports.DocumentManifest = DocumentManifest;
class DocumentReferenceAgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('who')) {
                this.who = new ResourceReference(obj.who);
            }
        }
    }
}
exports.DocumentReferenceAgentComponent = DocumentReferenceAgentComponent;
class DocumentReferenceRelatesToComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new ResourceReference(obj.target);
            }
        }
    }
}
exports.DocumentReferenceRelatesToComponent = DocumentReferenceRelatesToComponent;
class DocumentReferenceContentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('attachment')) {
                this.attachment = new Attachment(obj.attachment);
            }
            if (obj.hasOwnProperty('format')) {
                this.format = new Coding(obj.format);
            }
        }
    }
}
exports.DocumentReferenceContentComponent = DocumentReferenceContentComponent;
class DocumentReferenceContextComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = [];
                for (const o of obj.encounter || []) {
                    this.encounter.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('event')) {
                this.event = [];
                for (const o of obj.event || []) {
                    this.event.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('facilityType')) {
                this.facilityType = new CodeableConcept(obj.facilityType);
            }
            if (obj.hasOwnProperty('practiceSetting')) {
                this.practiceSetting = new CodeableConcept(obj.practiceSetting);
            }
            if (obj.hasOwnProperty('sourcePatientInfo')) {
                this.sourcePatientInfo = new ResourceReference(obj.sourcePatientInfo);
            }
            if (obj.hasOwnProperty('related')) {
                this.related = [];
                for (const o of obj.related || []) {
                    this.related.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.DocumentReferenceContextComponent = DocumentReferenceContextComponent;
class DocumentReference extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'DocumentReference';
        if (obj) {
            if (obj.hasOwnProperty('masterIdentifier')) {
                this.masterIdentifier = new Identifier(obj.masterIdentifier);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('docStatus')) {
                this.docStatus = obj.docStatus;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('agent')) {
                this.agent = [];
                for (const o of obj.agent || []) {
                    this.agent.push(new DocumentReferenceAgentComponent(o));
                }
            }
            if (obj.hasOwnProperty('authenticator')) {
                this.authenticator = new ResourceReference(obj.authenticator);
            }
            if (obj.hasOwnProperty('custodian')) {
                this.custodian = new ResourceReference(obj.custodian);
            }
            if (obj.hasOwnProperty('relatesTo')) {
                this.relatesTo = [];
                for (const o of obj.relatesTo || []) {
                    this.relatesTo.push(new DocumentReferenceRelatesToComponent(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('securityLabel')) {
                this.securityLabel = [];
                for (const o of obj.securityLabel || []) {
                    this.securityLabel.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('content')) {
                this.content = [];
                for (const o of obj.content || []) {
                    this.content.push(new DocumentReferenceContentComponent(o));
                }
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new DocumentReferenceContextComponent(obj.context);
            }
        }
    }
}
exports.DocumentReference = DocumentReference;
class Duration extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.Duration = Duration;
class EncounterStatusHistoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.EncounterStatusHistoryComponent = EncounterStatusHistoryComponent;
class EncounterClassHistoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('class')) {
                this.class = new Coding(obj.class);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.EncounterClassHistoryComponent = EncounterClassHistoryComponent;
class EncounterParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('individual')) {
                this.individual = new ResourceReference(obj.individual);
            }
        }
    }
}
exports.EncounterParticipantComponent = EncounterParticipantComponent;
class EncounterDiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('condition')) {
                this.condition = new ResourceReference(obj.condition);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('rank')) {
                this.rank = obj.rank;
            }
        }
    }
}
exports.EncounterDiagnosisComponent = EncounterDiagnosisComponent;
class EncounterHospitalizationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('preAdmissionIdentifier')) {
                this.preAdmissionIdentifier = new Identifier(obj.preAdmissionIdentifier);
            }
            if (obj.hasOwnProperty('origin')) {
                this.origin = new ResourceReference(obj.origin);
            }
            if (obj.hasOwnProperty('admitSource')) {
                this.admitSource = new CodeableConcept(obj.admitSource);
            }
            if (obj.hasOwnProperty('reAdmission')) {
                this.reAdmission = new CodeableConcept(obj.reAdmission);
            }
            if (obj.hasOwnProperty('dietPreference')) {
                this.dietPreference = [];
                for (const o of obj.dietPreference || []) {
                    this.dietPreference.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialCourtesy')) {
                this.specialCourtesy = [];
                for (const o of obj.specialCourtesy || []) {
                    this.specialCourtesy.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialArrangement')) {
                this.specialArrangement = [];
                for (const o of obj.specialArrangement || []) {
                    this.specialArrangement.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.hasOwnProperty('dischargeDisposition')) {
                this.dischargeDisposition = new CodeableConcept(obj.dischargeDisposition);
            }
        }
    }
}
exports.EncounterHospitalizationComponent = EncounterHospitalizationComponent;
class EncounterLocationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.EncounterLocationComponent = EncounterLocationComponent;
class Encounter extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Encounter';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusHistory')) {
                this.statusHistory = [];
                for (const o of obj.statusHistory || []) {
                    this.statusHistory.push(new EncounterStatusHistoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('class')) {
                this.class = new Coding(obj.class);
            }
            if (obj.hasOwnProperty('classHistory')) {
                this.classHistory = [];
                for (const o of obj.classHistory || []) {
                    this.classHistory.push(new EncounterClassHistoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviceType')) {
                this.serviceType = new CodeableConcept(obj.serviceType);
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('episodeOfCare')) {
                this.episodeOfCare = [];
                for (const o of obj.episodeOfCare || []) {
                    this.episodeOfCare.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new EncounterParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('appointment')) {
                this.appointment = new ResourceReference(obj.appointment);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('length')) {
                this.length = new Duration(obj.length);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = [];
                for (const o of obj.diagnosis || []) {
                    this.diagnosis.push(new EncounterDiagnosisComponent(o));
                }
            }
            if (obj.hasOwnProperty('account')) {
                this.account = [];
                for (const o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('hospitalization')) {
                this.hospitalization = new EncounterHospitalizationComponent(obj.hospitalization);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = [];
                for (const o of obj.location || []) {
                    this.location.push(new EncounterLocationComponent(o));
                }
            }
            if (obj.hasOwnProperty('serviceProvider')) {
                this.serviceProvider = new ResourceReference(obj.serviceProvider);
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = new ResourceReference(obj.partOf);
            }
        }
    }
}
exports.Encounter = Encounter;
class Endpoint extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Endpoint';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('connectionType')) {
                this.connectionType = new Coding(obj.connectionType);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('payloadType')) {
                this.payloadType = [];
                for (const o of obj.payloadType || []) {
                    this.payloadType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('payloadMimeType')) {
                this.payloadMimeType = obj.payloadMimeType;
            }
            if (obj.hasOwnProperty('address')) {
                this.address = obj.address;
            }
            if (obj.hasOwnProperty('header')) {
                this.header = obj.header;
            }
        }
    }
}
exports.Endpoint = Endpoint;
class EnrollmentRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EnrollmentRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('candidate')) {
                this.candidate = new ResourceReference(obj.candidate);
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
        }
    }
}
exports.EnrollmentRequest = EnrollmentRequest;
class EnrollmentResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EnrollmentResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('requestProvider')) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
        }
    }
}
exports.EnrollmentResponse = EnrollmentResponse;
class EntryDefinitionRelatedEntryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('relationtype')) {
                this.relationtype = obj.relationtype;
            }
            if (obj.hasOwnProperty('item')) {
                this.item = new ResourceReference(obj.item);
            }
        }
    }
}
exports.EntryDefinitionRelatedEntryComponent = EntryDefinitionRelatedEntryComponent;
class EntryDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EntryDefinition';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('orderable')) {
                this.orderable = obj.orderable;
            }
            if (obj.hasOwnProperty('referencedItem')) {
                this.referencedItem = new ResourceReference(obj.referencedItem);
            }
            if (obj.hasOwnProperty('additionalIdentifier')) {
                this.additionalIdentifier = [];
                for (const o of obj.additionalIdentifier || []) {
                    this.additionalIdentifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = [];
                for (const o of obj.classification || []) {
                    this.classification.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('validityPeriod')) {
                this.validityPeriod = new Period(obj.validityPeriod);
            }
            if (obj.hasOwnProperty('lastUpdated')) {
                this.lastUpdated = new Date(obj.lastUpdated);
            }
            if (obj.hasOwnProperty('additionalCharacteristic')) {
                this.additionalCharacteristic = [];
                for (const o of obj.additionalCharacteristic || []) {
                    this.additionalCharacteristic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('additionalClassification')) {
                this.additionalClassification = [];
                for (const o of obj.additionalClassification || []) {
                    this.additionalClassification.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('relatedEntry')) {
                this.relatedEntry = [];
                for (const o of obj.relatedEntry || []) {
                    this.relatedEntry.push(new EntryDefinitionRelatedEntryComponent(o));
                }
            }
        }
    }
}
exports.EntryDefinition = EntryDefinition;
class EpisodeOfCareStatusHistoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.EpisodeOfCareStatusHistoryComponent = EpisodeOfCareStatusHistoryComponent;
class EpisodeOfCareDiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('condition')) {
                this.condition = new ResourceReference(obj.condition);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('rank')) {
                this.rank = obj.rank;
            }
        }
    }
}
exports.EpisodeOfCareDiagnosisComponent = EpisodeOfCareDiagnosisComponent;
class EpisodeOfCare extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EpisodeOfCare';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusHistory')) {
                this.statusHistory = [];
                for (const o of obj.statusHistory || []) {
                    this.statusHistory.push(new EpisodeOfCareStatusHistoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = [];
                for (const o of obj.diagnosis || []) {
                    this.diagnosis.push(new EpisodeOfCareDiagnosisComponent(o));
                }
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('referralRequest')) {
                this.referralRequest = [];
                for (const o of obj.referralRequest || []) {
                    this.referralRequest.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('careManager')) {
                this.careManager = new ResourceReference(obj.careManager);
            }
            if (obj.hasOwnProperty('team')) {
                this.team = [];
                for (const o of obj.team || []) {
                    this.team.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('account')) {
                this.account = [];
                for (const o of obj.account || []) {
                    this.account.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.EpisodeOfCare = EpisodeOfCare;
class TriggerDefinition extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('data')) {
                this.data = new DataRequirement(obj.data);
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = new Expression(obj.condition);
            }
        }
    }
}
exports.TriggerDefinition = TriggerDefinition;
class EventDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'EventDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = [];
                for (const o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('editor')) {
                this.editor = [];
                for (const o of obj.editor || []) {
                    this.editor.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('reviewer')) {
                this.reviewer = [];
                for (const o of obj.reviewer || []) {
                    this.reviewer.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('endorser')) {
                this.endorser = [];
                for (const o of obj.endorser || []) {
                    this.endorser.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('trigger')) {
                this.trigger = new TriggerDefinition(obj.trigger);
            }
        }
    }
}
exports.EventDefinition = EventDefinition;
class ExampleScenarioActorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('actorId')) {
                this.actorId = obj.actorId;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.ExampleScenarioActorComponent = ExampleScenarioActorComponent;
class ExampleScenarioVersionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('versionId')) {
                this.versionId = obj.versionId;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.ExampleScenarioVersionComponent = ExampleScenarioVersionComponent;
class ExampleScenarioContainedInstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('resourceId')) {
                this.resourceId = obj.resourceId;
            }
            if (obj.hasOwnProperty('versionId')) {
                this.versionId = obj.versionId;
            }
        }
    }
}
exports.ExampleScenarioContainedInstanceComponent = ExampleScenarioContainedInstanceComponent;
class ExampleScenarioInstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('resourceId')) {
                this.resourceId = obj.resourceId;
            }
            if (obj.hasOwnProperty('resourceType')) {
                this.resourceType = obj.resourceType;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = [];
                for (const o of obj.version || []) {
                    this.version.push(new ExampleScenarioVersionComponent(o));
                }
            }
            if (obj.hasOwnProperty('containedInstance')) {
                this.containedInstance = [];
                for (const o of obj.containedInstance || []) {
                    this.containedInstance.push(new ExampleScenarioContainedInstanceComponent(o));
                }
            }
        }
    }
}
exports.ExampleScenarioInstanceComponent = ExampleScenarioInstanceComponent;
class ExampleScenarioOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('initiator')) {
                this.initiator = obj.initiator;
            }
            if (obj.hasOwnProperty('receiver')) {
                this.receiver = obj.receiver;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('initiatorActive')) {
                this.initiatorActive = obj.initiatorActive;
            }
            if (obj.hasOwnProperty('receiverActive')) {
                this.receiverActive = obj.receiverActive;
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ExampleScenarioContainedInstanceComponent(obj.request);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new ExampleScenarioContainedInstanceComponent(obj.response);
            }
        }
    }
}
exports.ExampleScenarioOperationComponent = ExampleScenarioOperationComponent;
class ExampleScenarioOptionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('step')) {
                this.step = [];
                for (const o of obj.step || []) {
                    this.step.push(new ExampleScenarioStepComponent(o));
                }
            }
            if (obj.hasOwnProperty('pause')) {
                this.pause = obj.pause;
            }
        }
    }
}
exports.ExampleScenarioOptionComponent = ExampleScenarioOptionComponent;
class ExampleScenarioAlternativeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('option')) {
                this.option = [];
                for (const o of obj.option || []) {
                    this.option.push(new ExampleScenarioOptionComponent(o));
                }
            }
        }
    }
}
exports.ExampleScenarioAlternativeComponent = ExampleScenarioAlternativeComponent;
class ExampleScenarioStepComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('process')) {
                this.process = [];
                for (const o of obj.process || []) {
                    this.process.push(new ExampleScenarioProcessComponent(o));
                }
            }
            if (obj.hasOwnProperty('pause')) {
                this.pause = obj.pause;
            }
            if (obj.hasOwnProperty('operation')) {
                this.operation = new ExampleScenarioOperationComponent(obj.operation);
            }
            if (obj.hasOwnProperty('alternative')) {
                this.alternative = new ExampleScenarioAlternativeComponent(obj.alternative);
            }
        }
    }
}
exports.ExampleScenarioStepComponent = ExampleScenarioStepComponent;
class ExampleScenarioProcessComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('preConditions')) {
                this.preConditions = obj.preConditions;
            }
            if (obj.hasOwnProperty('postConditions')) {
                this.postConditions = obj.postConditions;
            }
            if (obj.hasOwnProperty('step')) {
                this.step = [];
                for (const o of obj.step || []) {
                    this.step.push(new ExampleScenarioStepComponent(o));
                }
            }
        }
    }
}
exports.ExampleScenarioProcessComponent = ExampleScenarioProcessComponent;
class ExampleScenario extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ExampleScenario';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = [];
                for (const o of obj.actor || []) {
                    this.actor.push(new ExampleScenarioActorComponent(o));
                }
            }
            if (obj.hasOwnProperty('instance')) {
                this.instance = [];
                for (const o of obj.instance || []) {
                    this.instance.push(new ExampleScenarioInstanceComponent(o));
                }
            }
            if (obj.hasOwnProperty('process')) {
                this.process = [];
                for (const o of obj.process || []) {
                    this.process.push(new ExampleScenarioProcessComponent(o));
                }
            }
            if (obj.hasOwnProperty('workflow')) {
                this.workflow = obj.workflow;
            }
        }
    }
}
exports.ExampleScenario = ExampleScenario;
class ExplanationOfBenefitRelatedClaimComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('claim')) {
                this.claim = new ResourceReference(obj.claim);
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = new Identifier(obj.reference);
            }
        }
    }
}
exports.ExplanationOfBenefitRelatedClaimComponent = ExplanationOfBenefitRelatedClaimComponent;
class ExplanationOfBenefitPayeeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new Coding(obj.resource);
            }
            if (obj.hasOwnProperty('party')) {
                this.party = new ResourceReference(obj.party);
            }
        }
    }
}
exports.ExplanationOfBenefitPayeeComponent = ExplanationOfBenefitPayeeComponent;
class ExplanationOfBenefitSupportingInformationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new Coding(obj.reason);
            }
        }
    }
}
exports.ExplanationOfBenefitSupportingInformationComponent = ExplanationOfBenefitSupportingInformationComponent;
class ExplanationOfBenefitCareTeamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('responsible')) {
                this.responsible = obj.responsible;
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('qualification')) {
                this.qualification = new CodeableConcept(obj.qualification);
            }
        }
    }
}
exports.ExplanationOfBenefitCareTeamComponent = ExplanationOfBenefitCareTeamComponent;
class ExplanationOfBenefitDiagnosisComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = new Element(obj.diagnosis);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('onAdmission')) {
                this.onAdmission = new CodeableConcept(obj.onAdmission);
            }
            if (obj.hasOwnProperty('packageCode')) {
                this.packageCode = new CodeableConcept(obj.packageCode);
            }
        }
    }
}
exports.ExplanationOfBenefitDiagnosisComponent = ExplanationOfBenefitDiagnosisComponent;
class ExplanationOfBenefitProcedureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = new Element(obj.procedure);
            }
        }
    }
}
exports.ExplanationOfBenefitProcedureComponent = ExplanationOfBenefitProcedureComponent;
class ExplanationOfBenefitInsuranceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('focal')) {
                this.focal = obj.focal;
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = new ResourceReference(obj.coverage);
            }
        }
    }
}
exports.ExplanationOfBenefitInsuranceComponent = ExplanationOfBenefitInsuranceComponent;
class ExplanationOfBenefitAccidentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
        }
    }
}
exports.ExplanationOfBenefitAccidentComponent = ExplanationOfBenefitAccidentComponent;
class ExplanationOfBenefitAdjudicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.ExplanationOfBenefitAdjudicationComponent = ExplanationOfBenefitAdjudicationComponent;
class ExplanationOfBenefitSubDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitSubDetailComponent = ExplanationOfBenefitSubDetailComponent;
class ExplanationOfBenefitDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('subDetail')) {
                this.subDetail = [];
                for (const o of obj.subDetail || []) {
                    this.subDetail.push(new ExplanationOfBenefitSubDetailComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitDetailComponent = ExplanationOfBenefitDetailComponent;
class ExplanationOfBenefitItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('careTeamSequence')) {
                this.careTeamSequence = obj.careTeamSequence;
            }
            if (obj.hasOwnProperty('diagnosisSequence')) {
                this.diagnosisSequence = obj.diagnosisSequence;
            }
            if (obj.hasOwnProperty('procedureSequence')) {
                this.procedureSequence = obj.procedureSequence;
            }
            if (obj.hasOwnProperty('informationSequence')) {
                this.informationSequence = obj.informationSequence;
            }
            if (obj.hasOwnProperty('revenue')) {
                this.revenue = new CodeableConcept(obj.revenue);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('udi')) {
                this.udi = [];
                for (const o of obj.udi || []) {
                    this.udi.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('subSite')) {
                this.subSite = [];
                for (const o of obj.subSite || []) {
                    this.subSite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = [];
                for (const o of obj.encounter || []) {
                    this.encounter.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ExplanationOfBenefitDetailComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitItemComponent = ExplanationOfBenefitItemComponent;
class ExplanationOfBenefitAddedItemDetailSubDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitAddedItemDetailSubDetailComponent = ExplanationOfBenefitAddedItemDetailSubDetailComponent;
class ExplanationOfBenefitAddedItemDetailComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('subDetail')) {
                this.subDetail = [];
                for (const o of obj.subDetail || []) {
                    this.subDetail.push(new ExplanationOfBenefitAddedItemDetailSubDetailComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitAddedItemDetailComponent = ExplanationOfBenefitAddedItemDetailComponent;
class ExplanationOfBenefitAddedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('itemSequence')) {
                this.itemSequence = obj.itemSequence;
            }
            if (obj.hasOwnProperty('detailSequence')) {
                this.detailSequence = obj.detailSequence;
            }
            if (obj.hasOwnProperty('subDetailSequence')) {
                this.subDetailSequence = obj.subDetailSequence;
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = [];
                for (const o of obj.provider || []) {
                    this.provider.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('billcode')) {
                this.billcode = new CodeableConcept(obj.billcode);
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = [];
                for (const o of obj.modifier || []) {
                    this.modifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('programCode')) {
                this.programCode = [];
                for (const o of obj.programCode || []) {
                    this.programCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviced')) {
                this.serviced = new Element(obj.serviced);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new Element(obj.location);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('unitPrice')) {
                this.unitPrice = new Money(obj.unitPrice);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('net')) {
                this.net = new Money(obj.net);
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('subSite')) {
                this.subSite = [];
                for (const o of obj.subSite || []) {
                    this.subSite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('noteNumber')) {
                this.noteNumber = obj.noteNumber;
            }
            if (obj.hasOwnProperty('adjudication')) {
                this.adjudication = [];
                for (const o of obj.adjudication || []) {
                    this.adjudication.push(new ExplanationOfBenefitAdjudicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new ExplanationOfBenefitAddedItemDetailComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitAddedItemComponent = ExplanationOfBenefitAddedItemComponent;
class ExplanationOfBenefitTotalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.ExplanationOfBenefitTotalComponent = ExplanationOfBenefitTotalComponent;
class ExplanationOfBenefitPaymentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('adjustment')) {
                this.adjustment = new Money(obj.adjustment);
            }
            if (obj.hasOwnProperty('adjustmentReason')) {
                this.adjustmentReason = new CodeableConcept(obj.adjustmentReason);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
        }
    }
}
exports.ExplanationOfBenefitPaymentComponent = ExplanationOfBenefitPaymentComponent;
class ExplanationOfBenefitNoteComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = new CodeableConcept(obj.language);
            }
        }
    }
}
exports.ExplanationOfBenefitNoteComponent = ExplanationOfBenefitNoteComponent;
class ExplanationOfBenefitBenefitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('allowed')) {
                this.allowed = new Element(obj.allowed);
            }
            if (obj.hasOwnProperty('used')) {
                this.used = new Element(obj.used);
            }
        }
    }
}
exports.ExplanationOfBenefitBenefitComponent = ExplanationOfBenefitBenefitComponent;
class ExplanationOfBenefitBenefitBalanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('excluded')) {
                this.excluded = obj.excluded;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('network')) {
                this.network = new CodeableConcept(obj.network);
            }
            if (obj.hasOwnProperty('unit')) {
                this.unit = new CodeableConcept(obj.unit);
            }
            if (obj.hasOwnProperty('term')) {
                this.term = new CodeableConcept(obj.term);
            }
            if (obj.hasOwnProperty('financial')) {
                this.financial = [];
                for (const o of obj.financial || []) {
                    this.financial.push(new ExplanationOfBenefitBenefitComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefitBenefitBalanceComponent = ExplanationOfBenefitBenefitBalanceComponent;
class ExplanationOfBenefit extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ExplanationOfBenefit';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subType')) {
                this.subType = new CodeableConcept(obj.subType);
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('billablePeriod')) {
                this.billablePeriod = new Period(obj.billablePeriod);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('enterer')) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.hasOwnProperty('insurer')) {
                this.insurer = new ResourceReference(obj.insurer);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('referral')) {
                this.referral = new ResourceReference(obj.referral);
            }
            if (obj.hasOwnProperty('facility')) {
                this.facility = new ResourceReference(obj.facility);
            }
            if (obj.hasOwnProperty('claim')) {
                this.claim = new ResourceReference(obj.claim);
            }
            if (obj.hasOwnProperty('claimResponse')) {
                this.claimResponse = new ResourceReference(obj.claimResponse);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('related')) {
                this.related = [];
                for (const o of obj.related || []) {
                    this.related.push(new ExplanationOfBenefitRelatedClaimComponent(o));
                }
            }
            if (obj.hasOwnProperty('prescription')) {
                this.prescription = new ResourceReference(obj.prescription);
            }
            if (obj.hasOwnProperty('originalPrescription')) {
                this.originalPrescription = new ResourceReference(obj.originalPrescription);
            }
            if (obj.hasOwnProperty('payee')) {
                this.payee = new ExplanationOfBenefitPayeeComponent(obj.payee);
            }
            if (obj.hasOwnProperty('information')) {
                this.information = [];
                for (const o of obj.information || []) {
                    this.information.push(new ExplanationOfBenefitSupportingInformationComponent(o));
                }
            }
            if (obj.hasOwnProperty('careTeam')) {
                this.careTeam = [];
                for (const o of obj.careTeam || []) {
                    this.careTeam.push(new ExplanationOfBenefitCareTeamComponent(o));
                }
            }
            if (obj.hasOwnProperty('diagnosis')) {
                this.diagnosis = [];
                for (const o of obj.diagnosis || []) {
                    this.diagnosis.push(new ExplanationOfBenefitDiagnosisComponent(o));
                }
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = [];
                for (const o of obj.procedure || []) {
                    this.procedure.push(new ExplanationOfBenefitProcedureComponent(o));
                }
            }
            if (obj.hasOwnProperty('precedence')) {
                this.precedence = obj.precedence;
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ExplanationOfBenefitInsuranceComponent(o));
                }
            }
            if (obj.hasOwnProperty('accident')) {
                this.accident = new ExplanationOfBenefitAccidentComponent(obj.accident);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new ExplanationOfBenefitItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('addItem')) {
                this.addItem = [];
                for (const o of obj.addItem || []) {
                    this.addItem.push(new ExplanationOfBenefitAddedItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('total')) {
                this.total = [];
                for (const o of obj.total || []) {
                    this.total.push(new ExplanationOfBenefitTotalComponent(o));
                }
            }
            if (obj.hasOwnProperty('payment')) {
                this.payment = new ExplanationOfBenefitPaymentComponent(obj.payment);
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('processNote')) {
                this.processNote = [];
                for (const o of obj.processNote || []) {
                    this.processNote.push(new ExplanationOfBenefitNoteComponent(o));
                }
            }
            if (obj.hasOwnProperty('benefitBalance')) {
                this.benefitBalance = [];
                for (const o of obj.benefitBalance || []) {
                    this.benefitBalance.push(new ExplanationOfBenefitBenefitBalanceComponent(o));
                }
            }
        }
    }
}
exports.ExplanationOfBenefit = ExplanationOfBenefit;
class FamilyMemberHistoryConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.hasOwnProperty('onset')) {
                this.onset = new Element(obj.onset);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.FamilyMemberHistoryConditionComponent = FamilyMemberHistoryConditionComponent;
class FamilyMemberHistory extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'FamilyMemberHistory';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('dataAbsentReason')) {
                this.dataAbsentReason = new CodeableConcept(obj.dataAbsentReason);
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = new CodeableConcept(obj.gender);
            }
            if (obj.hasOwnProperty('born')) {
                this.born = new Element(obj.born);
            }
            if (obj.hasOwnProperty('age')) {
                this.age = new Element(obj.age);
            }
            if (obj.hasOwnProperty('estimatedAge')) {
                this.estimatedAge = obj.estimatedAge;
            }
            if (obj.hasOwnProperty('deceased')) {
                this.deceased = new Element(obj.deceased);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = [];
                for (const o of obj.condition || []) {
                    this.condition.push(new FamilyMemberHistoryConditionComponent(o));
                }
            }
        }
    }
}
exports.FamilyMemberHistory = FamilyMemberHistory;
class GoalTargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('measure')) {
                this.measure = new CodeableConcept(obj.measure);
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = new Element(obj.detail);
            }
            if (obj.hasOwnProperty('due')) {
                this.due = new Element(obj.due);
            }
        }
    }
}
exports.GoalTargetComponent = GoalTargetComponent;
class Goal extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Goal';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = new CodeableConcept(obj.description);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('start')) {
                this.start = new Element(obj.start);
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new GoalTargetComponent(obj.target);
            }
            if (obj.hasOwnProperty('statusDate')) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = obj.statusReason;
            }
            if (obj.hasOwnProperty('expressedBy')) {
                this.expressedBy = new ResourceReference(obj.expressedBy);
            }
            if (obj.hasOwnProperty('addresses')) {
                this.addresses = [];
                for (const o of obj.addresses || []) {
                    this.addresses.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('outcomeCode')) {
                this.outcomeCode = [];
                for (const o of obj.outcomeCode || []) {
                    this.outcomeCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('outcomeReference')) {
                this.outcomeReference = [];
                for (const o of obj.outcomeReference || []) {
                    this.outcomeReference.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Goal = Goal;
class GraphDefinitionCompartmentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = obj.rule;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.GraphDefinitionCompartmentComponent = GraphDefinitionCompartmentComponent;
class GraphDefinitionTargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('params')) {
                this.params = obj.params;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('compartment')) {
                this.compartment = [];
                for (const o of obj.compartment || []) {
                    this.compartment.push(new GraphDefinitionCompartmentComponent(o));
                }
            }
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new GraphDefinitionLinkComponent(o));
                }
            }
        }
    }
}
exports.GraphDefinitionTargetComponent = GraphDefinitionTargetComponent;
class GraphDefinitionLinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('sliceName')) {
                this.sliceName = obj.sliceName;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new GraphDefinitionTargetComponent(o));
                }
            }
        }
    }
}
exports.GraphDefinitionLinkComponent = GraphDefinitionLinkComponent;
class GraphDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'GraphDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('start')) {
                this.start = obj.start;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new GraphDefinitionLinkComponent(o));
                }
            }
        }
    }
}
exports.GraphDefinition = GraphDefinition;
class GroupCharacteristicComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('exclude')) {
                this.exclude = obj.exclude;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.GroupCharacteristicComponent = GroupCharacteristicComponent;
class GroupMemberComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('entity')) {
                this.entity = new ResourceReference(obj.entity);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('inactive')) {
                this.inactive = obj.inactive;
            }
        }
    }
}
exports.GroupMemberComponent = GroupMemberComponent;
class Group extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Group';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('actual')) {
                this.actual = obj.actual;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = obj.quantity;
            }
            if (obj.hasOwnProperty('characteristic')) {
                this.characteristic = [];
                for (const o of obj.characteristic || []) {
                    this.characteristic.push(new GroupCharacteristicComponent(o));
                }
            }
            if (obj.hasOwnProperty('member')) {
                this.member = [];
                for (const o of obj.member || []) {
                    this.member.push(new GroupMemberComponent(o));
                }
            }
        }
    }
}
exports.Group = Group;
class GuidanceResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'GuidanceResponse';
        if (obj) {
            if (obj.hasOwnProperty('requestIdentifier')) {
                this.requestIdentifier = new Identifier(obj.requestIdentifier);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('module')) {
                this.module = new Element(obj.module);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('occurrenceDateTime')) {
                this.occurrenceDateTime = new Date(obj.occurrenceDateTime);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('evaluationMessage')) {
                this.evaluationMessage = [];
                for (const o of obj.evaluationMessage || []) {
                    this.evaluationMessage.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('outputParameters')) {
                this.outputParameters = new ResourceReference(obj.outputParameters);
            }
            if (obj.hasOwnProperty('result')) {
                this.result = new ResourceReference(obj.result);
            }
            if (obj.hasOwnProperty('dataRequirement')) {
                this.dataRequirement = [];
                for (const o of obj.dataRequirement || []) {
                    this.dataRequirement.push(new DataRequirement(o));
                }
            }
        }
    }
}
exports.GuidanceResponse = GuidanceResponse;
class HealthcareServiceAvailableTimeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('daysOfWeek')) {
                this.daysOfWeek = obj.daysOfWeek;
            }
            if (obj.hasOwnProperty('allDay')) {
                this.allDay = obj.allDay;
            }
            if (obj.hasOwnProperty('availableStartTime')) {
                this.availableStartTime = new Date(obj.availableStartTime);
            }
            if (obj.hasOwnProperty('availableEndTime')) {
                this.availableEndTime = new Date(obj.availableEndTime);
            }
        }
    }
}
exports.HealthcareServiceAvailableTimeComponent = HealthcareServiceAvailableTimeComponent;
class HealthcareServiceNotAvailableComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('during')) {
                this.during = new Period(obj.during);
            }
        }
    }
}
exports.HealthcareServiceNotAvailableComponent = HealthcareServiceNotAvailableComponent;
class HealthcareService extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'HealthcareService';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('providedBy')) {
                this.providedBy = new ResourceReference(obj.providedBy);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = [];
                for (const o of obj.location || []) {
                    this.location.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('extraDetails')) {
                this.extraDetails = obj.extraDetails;
            }
            if (obj.hasOwnProperty('photo')) {
                this.photo = new Attachment(obj.photo);
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('coverageArea')) {
                this.coverageArea = [];
                for (const o of obj.coverageArea || []) {
                    this.coverageArea.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('serviceProvisionCode')) {
                this.serviceProvisionCode = [];
                for (const o of obj.serviceProvisionCode || []) {
                    this.serviceProvisionCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('eligibility')) {
                this.eligibility = new CodeableConcept(obj.eligibility);
            }
            if (obj.hasOwnProperty('eligibilityNote')) {
                this.eligibilityNote = obj.eligibilityNote;
            }
            if (obj.hasOwnProperty('programName')) {
                this.programName = obj.programName;
            }
            if (obj.hasOwnProperty('characteristic')) {
                this.characteristic = [];
                for (const o of obj.characteristic || []) {
                    this.characteristic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('referralMethod')) {
                this.referralMethod = [];
                for (const o of obj.referralMethod || []) {
                    this.referralMethod.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('appointmentRequired')) {
                this.appointmentRequired = obj.appointmentRequired;
            }
            if (obj.hasOwnProperty('availableTime')) {
                this.availableTime = [];
                for (const o of obj.availableTime || []) {
                    this.availableTime.push(new HealthcareServiceAvailableTimeComponent(o));
                }
            }
            if (obj.hasOwnProperty('notAvailable')) {
                this.notAvailable = [];
                for (const o of obj.notAvailable || []) {
                    this.notAvailable.push(new HealthcareServiceNotAvailableComponent(o));
                }
            }
            if (obj.hasOwnProperty('availabilityExceptions')) {
                this.availabilityExceptions = obj.availabilityExceptions;
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.HealthcareService = HealthcareService;
class HumanName extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('family')) {
                this.family = obj.family;
            }
            if (obj.hasOwnProperty('given')) {
                this.given = obj.given;
            }
            if (obj.hasOwnProperty('prefix')) {
                this.prefix = obj.prefix;
            }
            if (obj.hasOwnProperty('suffix')) {
                this.suffix = obj.suffix;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.HumanName = HumanName;
class ImagingManifest {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.ImagingManifest = ImagingManifest;
class ImagingStudyPerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.ImagingStudyPerformerComponent = ImagingStudyPerformerComponent;
class ImagingStudyInstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('sopClass')) {
                this.sopClass = new Coding(obj.sopClass);
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
        }
    }
}
exports.ImagingStudyInstanceComponent = ImagingStudyInstanceComponent;
class ImagingStudySeriesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('number')) {
                this.number = obj.number;
            }
            if (obj.hasOwnProperty('modality')) {
                this.modality = new Coding(obj.modality);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('numberOfInstances')) {
                this.numberOfInstances = obj.numberOfInstances;
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new Coding(obj.bodySite);
            }
            if (obj.hasOwnProperty('laterality')) {
                this.laterality = new Coding(obj.laterality);
            }
            if (obj.hasOwnProperty('specimen')) {
                this.specimen = [];
                for (const o of obj.specimen || []) {
                    this.specimen.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('started')) {
                this.started = new Date(obj.started);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ImagingStudyPerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('instance')) {
                this.instance = [];
                for (const o of obj.instance || []) {
                    this.instance.push(new ImagingStudyInstanceComponent(o));
                }
            }
        }
    }
}
exports.ImagingStudySeriesComponent = ImagingStudySeriesComponent;
class ImagingStudy extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImagingStudy';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('modality')) {
                this.modality = [];
                for (const o of obj.modality || []) {
                    this.modality.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('started')) {
                this.started = new Date(obj.started);
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('referrer')) {
                this.referrer = new ResourceReference(obj.referrer);
            }
            if (obj.hasOwnProperty('interpreter')) {
                this.interpreter = [];
                for (const o of obj.interpreter || []) {
                    this.interpreter.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('numberOfSeries')) {
                this.numberOfSeries = obj.numberOfSeries;
            }
            if (obj.hasOwnProperty('numberOfInstances')) {
                this.numberOfInstances = obj.numberOfInstances;
            }
            if (obj.hasOwnProperty('procedureReference')) {
                this.procedureReference = new ResourceReference(obj.procedureReference);
            }
            if (obj.hasOwnProperty('procedureCode')) {
                this.procedureCode = [];
                for (const o of obj.procedureCode || []) {
                    this.procedureCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('series')) {
                this.series = [];
                for (const o of obj.series || []) {
                    this.series.push(new ImagingStudySeriesComponent(o));
                }
            }
        }
    }
}
exports.ImagingStudy = ImagingStudy;
class ImmunizationPerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.ImmunizationPerformerComponent = ImmunizationPerformerComponent;
class ImmunizationEducationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('documentType')) {
                this.documentType = obj.documentType;
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = obj.reference;
            }
            if (obj.hasOwnProperty('publicationDate')) {
                this.publicationDate = new Date(obj.publicationDate);
            }
            if (obj.hasOwnProperty('presentationDate')) {
                this.presentationDate = new Date(obj.presentationDate);
            }
        }
    }
}
exports.ImmunizationEducationComponent = ImmunizationEducationComponent;
class ImmunizationProtocolAppliedComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('series')) {
                this.series = obj.series;
            }
            if (obj.hasOwnProperty('authority')) {
                this.authority = new ResourceReference(obj.authority);
            }
            if (obj.hasOwnProperty('targetDisease')) {
                this.targetDisease = new CodeableConcept(obj.targetDisease);
            }
            if (obj.hasOwnProperty('doseNumber')) {
                this.doseNumber = new Element(obj.doseNumber);
            }
        }
    }
}
exports.ImmunizationProtocolAppliedComponent = ImmunizationProtocolAppliedComponent;
class Immunization extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Immunization';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('vaccineCode')) {
                this.vaccineCode = new CodeableConcept(obj.vaccineCode);
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('recorded')) {
                this.recorded = new Date(obj.recorded);
            }
            if (obj.hasOwnProperty('primarySource')) {
                this.primarySource = obj.primarySource;
            }
            if (obj.hasOwnProperty('reportOrigin')) {
                this.reportOrigin = new CodeableConcept(obj.reportOrigin);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = new ResourceReference(obj.manufacturer);
            }
            if (obj.hasOwnProperty('lotNumber')) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.hasOwnProperty('expirationDate')) {
                this.expirationDate = new Date(obj.expirationDate);
            }
            if (obj.hasOwnProperty('site')) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.hasOwnProperty('route')) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.hasOwnProperty('doseQuantity')) {
                this.doseQuantity = new SimpleQuantity(obj.doseQuantity);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ImmunizationPerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('isSubpotent')) {
                this.isSubpotent = obj.isSubpotent;
            }
            if (obj.hasOwnProperty('subpotentReason')) {
                this.subpotentReason = [];
                for (const o of obj.subpotentReason || []) {
                    this.subpotentReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('education')) {
                this.education = [];
                for (const o of obj.education || []) {
                    this.education.push(new ImmunizationEducationComponent(o));
                }
            }
            if (obj.hasOwnProperty('programEligibility')) {
                this.programEligibility = [];
                for (const o of obj.programEligibility || []) {
                    this.programEligibility.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('fundingSource')) {
                this.fundingSource = new CodeableConcept(obj.fundingSource);
            }
            if (obj.hasOwnProperty('protocolApplied')) {
                this.protocolApplied = [];
                for (const o of obj.protocolApplied || []) {
                    this.protocolApplied.push(new ImmunizationProtocolAppliedComponent(o));
                }
            }
        }
    }
}
exports.Immunization = Immunization;
class ImmunizationEvaluation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImmunizationEvaluation';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('authority')) {
                this.authority = new ResourceReference(obj.authority);
            }
            if (obj.hasOwnProperty('targetDisease')) {
                this.targetDisease = new CodeableConcept(obj.targetDisease);
            }
            if (obj.hasOwnProperty('immunizationEvent')) {
                this.immunizationEvent = new ResourceReference(obj.immunizationEvent);
            }
            if (obj.hasOwnProperty('doseStatus')) {
                this.doseStatus = new CodeableConcept(obj.doseStatus);
            }
            if (obj.hasOwnProperty('doseStatusReason')) {
                this.doseStatusReason = [];
                for (const o of obj.doseStatusReason || []) {
                    this.doseStatusReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('series')) {
                this.series = obj.series;
            }
            if (obj.hasOwnProperty('doseNumber')) {
                this.doseNumber = new Element(obj.doseNumber);
            }
            if (obj.hasOwnProperty('seriesDoses')) {
                this.seriesDoses = new Element(obj.seriesDoses);
            }
        }
    }
}
exports.ImmunizationEvaluation = ImmunizationEvaluation;
class ImmunizationRecommendationDateCriterionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Date(obj.value);
            }
        }
    }
}
exports.ImmunizationRecommendationDateCriterionComponent = ImmunizationRecommendationDateCriterionComponent;
class ImmunizationRecommendationRecommendationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('vaccineCode')) {
                this.vaccineCode = [];
                for (const o of obj.vaccineCode || []) {
                    this.vaccineCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('targetDisease')) {
                this.targetDisease = new CodeableConcept(obj.targetDisease);
            }
            if (obj.hasOwnProperty('contraindicatedVaccineCode')) {
                this.contraindicatedVaccineCode = [];
                for (const o of obj.contraindicatedVaccineCode || []) {
                    this.contraindicatedVaccineCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('forecastStatus')) {
                this.forecastStatus = new CodeableConcept(obj.forecastStatus);
            }
            if (obj.hasOwnProperty('forecastReason')) {
                this.forecastReason = [];
                for (const o of obj.forecastReason || []) {
                    this.forecastReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('dateCriterion')) {
                this.dateCriterion = [];
                for (const o of obj.dateCriterion || []) {
                    this.dateCriterion.push(new ImmunizationRecommendationDateCriterionComponent(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('series')) {
                this.series = obj.series;
            }
            if (obj.hasOwnProperty('doseNumber')) {
                this.doseNumber = new Element(obj.doseNumber);
            }
            if (obj.hasOwnProperty('seriesDoses')) {
                this.seriesDoses = new Element(obj.seriesDoses);
            }
            if (obj.hasOwnProperty('supportingImmunization')) {
                this.supportingImmunization = [];
                for (const o of obj.supportingImmunization || []) {
                    this.supportingImmunization.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('supportingPatientInformation')) {
                this.supportingPatientInformation = [];
                for (const o of obj.supportingPatientInformation || []) {
                    this.supportingPatientInformation.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ImmunizationRecommendationRecommendationComponent = ImmunizationRecommendationRecommendationComponent;
class ImmunizationRecommendation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImmunizationRecommendation';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('authority')) {
                this.authority = new ResourceReference(obj.authority);
            }
            if (obj.hasOwnProperty('recommendation')) {
                this.recommendation = [];
                for (const o of obj.recommendation || []) {
                    this.recommendation.push(new ImmunizationRecommendationRecommendationComponent(o));
                }
            }
        }
    }
}
exports.ImmunizationRecommendation = ImmunizationRecommendation;
class ImplementationGuideDependsOnComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
            if (obj.hasOwnProperty('packageId')) {
                this.packageId = obj.packageId;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
        }
    }
}
exports.ImplementationGuideDependsOnComponent = ImplementationGuideDependsOnComponent;
class ImplementationGuideGlobalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
        }
    }
}
exports.ImplementationGuideGlobalComponent = ImplementationGuideGlobalComponent;
class ImplementationGuidePackageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.ImplementationGuidePackageComponent = ImplementationGuidePackageComponent;
class ImplementationGuideResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        this.exampleBoolean = false;
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('exampleBoolean')) {
                this.exampleBoolean = obj.exampleBoolean;
            }
            if (obj.hasOwnProperty('exampleCanonical')) {
                this.exampleCanonical = obj.exampleCanonical;
            }
            if (obj.hasOwnProperty('package')) {
                this.package = obj.package;
            }
        }
    }
}
exports.ImplementationGuideResourceComponent = ImplementationGuideResourceComponent;
class ImplementationGuidePageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('nameUrl')) {
                this.nameUrl = obj.nameUrl;
            }
            if (obj.hasOwnProperty('nameReference')) {
                this.nameReference = obj.nameReference;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('generation')) {
                this.generation = obj.generation;
            }
            if (obj.hasOwnProperty('page')) {
                this.page = [];
                for (const o of obj.page || []) {
                    this.page.push(new ImplementationGuidePageComponent(o));
                }
            }
        }
    }
}
exports.ImplementationGuidePageComponent = ImplementationGuidePageComponent;
class ImplementationGuideParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.ImplementationGuideParameterComponent = ImplementationGuideParameterComponent;
class ImplementationGuideTemplateComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('scope')) {
                this.scope = obj.scope;
            }
        }
    }
}
exports.ImplementationGuideTemplateComponent = ImplementationGuideTemplateComponent;
class ImplementationGuideDefinitionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('package')) {
                this.package = [];
                for (const o of obj.package || []) {
                    this.package.push(new ImplementationGuidePackageComponent(o));
                }
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = [];
                for (const o of obj.resource || []) {
                    this.resource.push(new ImplementationGuideResourceComponent(o));
                }
            }
            if (obj.hasOwnProperty('page')) {
                this.page = new ImplementationGuidePageComponent(obj.page);
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new ImplementationGuideParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('template')) {
                this.template = [];
                for (const o of obj.template || []) {
                    this.template.push(new ImplementationGuideTemplateComponent(o));
                }
            }
        }
    }
}
exports.ImplementationGuideDefinitionComponent = ImplementationGuideDefinitionComponent;
class ImplementationGuideManifestResourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('reference')) {
                this.reference = new ResourceReference(obj.reference);
            }
            if (obj.hasOwnProperty('example')) {
                this.example = new Element(obj.example);
            }
            if (obj.hasOwnProperty('relativePath')) {
                this.relativePath = obj.relativePath;
            }
        }
    }
}
exports.ImplementationGuideManifestResourceComponent = ImplementationGuideManifestResourceComponent;
class ImplementationGuideManifestPageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('anchor')) {
                this.anchor = obj.anchor;
            }
        }
    }
}
exports.ImplementationGuideManifestPageComponent = ImplementationGuideManifestPageComponent;
class ImplementationGuideManifestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('rendering')) {
                this.rendering = obj.rendering;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = [];
                for (const o of obj.resource || []) {
                    this.resource.push(new ImplementationGuideManifestResourceComponent(o));
                }
            }
            if (obj.hasOwnProperty('page')) {
                this.page = [];
                for (const o of obj.page || []) {
                    this.page.push(new ImplementationGuideManifestPageComponent(o));
                }
            }
            if (obj.hasOwnProperty('image')) {
                this.image = obj.image;
            }
            if (obj.hasOwnProperty('other')) {
                this.other = obj.other;
            }
        }
    }
}
exports.ImplementationGuideManifestComponent = ImplementationGuideManifestComponent;
class ImplementationGuide extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ImplementationGuide';
        this.status = 'draft';
        this.fhirVersion = ['3.5.0'];
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('packageId')) {
                this.packageId = obj.packageId;
            }
            if (obj.hasOwnProperty('license')) {
                this.license = obj.license;
            }
            if (obj.hasOwnProperty('fhirVersion')) {
                this.fhirVersion = obj.fhirVersion;
            }
            if (obj.hasOwnProperty('dependsOn')) {
                this.dependsOn = [];
                for (const o of obj.dependsOn || []) {
                    this.dependsOn.push(new ImplementationGuideDependsOnComponent(o));
                }
            }
            if (obj.hasOwnProperty('global')) {
                this.global = [];
                for (const o of obj.global || []) {
                    this.global.push(new ImplementationGuideGlobalComponent(o));
                }
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = new ImplementationGuideDefinitionComponent(obj.definition);
            }
            if (obj.hasOwnProperty('manifest')) {
                this.manifest = new ImplementationGuideManifestComponent(obj.manifest);
            }
        }
    }
}
exports.ImplementationGuide = ImplementationGuide;
class InsurancePlanContactComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = new CodeableConcept(obj.purpose);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = new HumanName(obj.name);
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = new Address(obj.address);
            }
        }
    }
}
exports.InsurancePlanContactComponent = InsurancePlanContactComponent;
class InsurancePlanLimitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Quantity(obj.value);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
        }
    }
}
exports.InsurancePlanLimitComponent = InsurancePlanLimitComponent;
class InsurancePlanCoverageBenefitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('requirement')) {
                this.requirement = obj.requirement;
            }
            if (obj.hasOwnProperty('limit')) {
                this.limit = [];
                for (const o of obj.limit || []) {
                    this.limit.push(new InsurancePlanLimitComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlanCoverageBenefitComponent = InsurancePlanCoverageBenefitComponent;
class InsurancePlanCoverageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('network')) {
                this.network = [];
                for (const o of obj.network || []) {
                    this.network.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('benefit')) {
                this.benefit = [];
                for (const o of obj.benefit || []) {
                    this.benefit.push(new InsurancePlanCoverageBenefitComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlanCoverageComponent = InsurancePlanCoverageComponent;
class InsurancePlanGeneralCostComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('groupSize')) {
                this.groupSize = obj.groupSize;
            }
            if (obj.hasOwnProperty('cost')) {
                this.cost = new Money(obj.cost);
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.InsurancePlanGeneralCostComponent = InsurancePlanGeneralCostComponent;
class InsurancePlanCostComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('applicability')) {
                this.applicability = new CodeableConcept(obj.applicability);
            }
            if (obj.hasOwnProperty('qualifiers')) {
                this.qualifiers = [];
                for (const o of obj.qualifiers || []) {
                    this.qualifiers.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Quantity(obj.value);
            }
        }
    }
}
exports.InsurancePlanCostComponent = InsurancePlanCostComponent;
class InsurancePlanPlanBenefitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('cost')) {
                this.cost = [];
                for (const o of obj.cost || []) {
                    this.cost.push(new InsurancePlanCostComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlanPlanBenefitComponent = InsurancePlanPlanBenefitComponent;
class InsurancePlanSpecificCostComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('benefit')) {
                this.benefit = [];
                for (const o of obj.benefit || []) {
                    this.benefit.push(new InsurancePlanPlanBenefitComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlanSpecificCostComponent = InsurancePlanSpecificCostComponent;
class InsurancePlanPlanComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('coverageArea')) {
                this.coverageArea = [];
                for (const o of obj.coverageArea || []) {
                    this.coverageArea.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('network')) {
                this.network = [];
                for (const o of obj.network || []) {
                    this.network.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('generalCost')) {
                this.generalCost = [];
                for (const o of obj.generalCost || []) {
                    this.generalCost.push(new InsurancePlanGeneralCostComponent(o));
                }
            }
            if (obj.hasOwnProperty('specificCost')) {
                this.specificCost = [];
                for (const o of obj.specificCost || []) {
                    this.specificCost.push(new InsurancePlanSpecificCostComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlanPlanComponent = InsurancePlanPlanComponent;
class InsurancePlan extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'InsurancePlan';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('ownedBy')) {
                this.ownedBy = new ResourceReference(obj.ownedBy);
            }
            if (obj.hasOwnProperty('administeredBy')) {
                this.administeredBy = new ResourceReference(obj.administeredBy);
            }
            if (obj.hasOwnProperty('coverageArea')) {
                this.coverageArea = [];
                for (const o of obj.coverageArea || []) {
                    this.coverageArea.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new InsurancePlanContactComponent(o));
                }
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('network')) {
                this.network = [];
                for (const o of obj.network || []) {
                    this.network.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('coverage')) {
                this.coverage = [];
                for (const o of obj.coverage || []) {
                    this.coverage.push(new InsurancePlanCoverageComponent(o));
                }
            }
            if (obj.hasOwnProperty('plan')) {
                this.plan = [];
                for (const o of obj.plan || []) {
                    this.plan.push(new InsurancePlanPlanComponent(o));
                }
            }
        }
    }
}
exports.InsurancePlan = InsurancePlan;
class InvoiceParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.InvoiceParticipantComponent = InvoiceParticipantComponent;
class InvoicePriceComponentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.InvoicePriceComponentComponent = InvoicePriceComponentComponent;
class InvoiceLineItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequence')) {
                this.sequence = obj.sequence;
            }
            if (obj.hasOwnProperty('chargeItem')) {
                this.chargeItem = new Element(obj.chargeItem);
            }
            if (obj.hasOwnProperty('priceComponent')) {
                this.priceComponent = [];
                for (const o of obj.priceComponent || []) {
                    this.priceComponent.push(new InvoicePriceComponentComponent(o));
                }
            }
        }
    }
}
exports.InvoiceLineItemComponent = InvoiceLineItemComponent;
class Invoice extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Invoice';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('cancelledReason')) {
                this.cancelledReason = obj.cancelledReason;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = new ResourceReference(obj.recipient);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new InvoiceParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('issuer')) {
                this.issuer = new ResourceReference(obj.issuer);
            }
            if (obj.hasOwnProperty('account')) {
                this.account = new ResourceReference(obj.account);
            }
            if (obj.hasOwnProperty('lineItem')) {
                this.lineItem = [];
                for (const o of obj.lineItem || []) {
                    this.lineItem.push(new InvoiceLineItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('totalPriceComponent')) {
                this.totalPriceComponent = [];
                for (const o of obj.totalPriceComponent || []) {
                    this.totalPriceComponent.push(new InvoicePriceComponentComponent(o));
                }
            }
            if (obj.hasOwnProperty('totalNet')) {
                this.totalNet = new Money(obj.totalNet);
            }
            if (obj.hasOwnProperty('totalGross')) {
                this.totalGross = new Money(obj.totalGross);
            }
            if (obj.hasOwnProperty('paymentTerms')) {
                this.paymentTerms = obj.paymentTerms;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Invoice = Invoice;
class ItemInstance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ItemInstance';
        if (obj) {
            if (obj.hasOwnProperty('count')) {
                this.count = obj.count;
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('manufactureDate')) {
                this.manufactureDate = new Date(obj.manufactureDate);
            }
            if (obj.hasOwnProperty('expiryDate')) {
                this.expiryDate = new Date(obj.expiryDate);
            }
            if (obj.hasOwnProperty('currentSWVersion')) {
                this.currentSWVersion = obj.currentSWVersion;
            }
            if (obj.hasOwnProperty('lotNumber')) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.hasOwnProperty('serialNumber')) {
                this.serialNumber = obj.serialNumber;
            }
            if (obj.hasOwnProperty('carrierAIDC')) {
                this.carrierAIDC = obj.carrierAIDC;
            }
            if (obj.hasOwnProperty('carrierHRF')) {
                this.carrierHRF = obj.carrierHRF;
            }
        }
    }
}
exports.ItemInstance = ItemInstance;
class ParameterDefinition extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
        }
    }
}
exports.ParameterDefinition = ParameterDefinition;
class Library extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Library';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = [];
                for (const o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('editor')) {
                this.editor = [];
                for (const o of obj.editor || []) {
                    this.editor.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('reviewer')) {
                this.reviewer = [];
                for (const o of obj.reviewer || []) {
                    this.reviewer.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('endorser')) {
                this.endorser = [];
                for (const o of obj.endorser || []) {
                    this.endorser.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new ParameterDefinition(o));
                }
            }
            if (obj.hasOwnProperty('dataRequirement')) {
                this.dataRequirement = [];
                for (const o of obj.dataRequirement || []) {
                    this.dataRequirement.push(new DataRequirement(o));
                }
            }
            if (obj.hasOwnProperty('content')) {
                this.content = [];
                for (const o of obj.content || []) {
                    this.content.push(new Attachment(o));
                }
            }
        }
    }
}
exports.Library = Library;
class LinkageItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new ResourceReference(obj.resource);
            }
        }
    }
}
exports.LinkageItemComponent = LinkageItemComponent;
class Linkage extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Linkage';
        if (obj) {
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new LinkageItemComponent(o));
                }
            }
        }
    }
}
exports.Linkage = Linkage;
class ListEntryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('flag')) {
                this.flag = new CodeableConcept(obj.flag);
            }
            if (obj.hasOwnProperty('deleted')) {
                this.deleted = obj.deleted;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = new ResourceReference(obj.item);
            }
        }
    }
}
exports.ListEntryComponent = ListEntryComponent;
class List extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'List';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('orderedBy')) {
                this.orderedBy = new CodeableConcept(obj.orderedBy);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('entry')) {
                this.entry = [];
                for (const o of obj.entry || []) {
                    this.entry.push(new ListEntryComponent(o));
                }
            }
            if (obj.hasOwnProperty('emptyReason')) {
                this.emptyReason = new CodeableConcept(obj.emptyReason);
            }
        }
    }
}
exports.List = List;
class LocationPositionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('longitude')) {
                this.longitude = obj.longitude;
            }
            if (obj.hasOwnProperty('latitude')) {
                this.latitude = obj.latitude;
            }
            if (obj.hasOwnProperty('altitude')) {
                this.altitude = obj.altitude;
            }
        }
    }
}
exports.LocationPositionComponent = LocationPositionComponent;
class LocationHoursOfOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('daysOfWeek')) {
                this.daysOfWeek = obj.daysOfWeek;
            }
            if (obj.hasOwnProperty('allDay')) {
                this.allDay = obj.allDay;
            }
            if (obj.hasOwnProperty('openingTime')) {
                this.openingTime = new Date(obj.openingTime);
            }
            if (obj.hasOwnProperty('closingTime')) {
                this.closingTime = new Date(obj.closingTime);
            }
        }
    }
}
exports.LocationHoursOfOperationComponent = LocationHoursOfOperationComponent;
class Location extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Location';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('operationalStatus')) {
                this.operationalStatus = new Coding(obj.operationalStatus);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = new Address(obj.address);
            }
            if (obj.hasOwnProperty('physicalType')) {
                this.physicalType = new CodeableConcept(obj.physicalType);
            }
            if (obj.hasOwnProperty('position')) {
                this.position = new LocationPositionComponent(obj.position);
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = new ResourceReference(obj.partOf);
            }
            if (obj.hasOwnProperty('hoursOfOperation')) {
                this.hoursOfOperation = [];
                for (const o of obj.hoursOfOperation || []) {
                    this.hoursOfOperation.push(new LocationHoursOfOperationComponent(o));
                }
            }
            if (obj.hasOwnProperty('availabilityExceptions')) {
                this.availabilityExceptions = obj.availabilityExceptions;
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Location = Location;
class MarketingStatus extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('country')) {
                this.country = new CodeableConcept(obj.country);
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = new CodeableConcept(obj.jurisdiction);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('dateRange')) {
                this.dateRange = new Period(obj.dateRange);
            }
            if (obj.hasOwnProperty('restoreDate')) {
                this.restoreDate = new Date(obj.restoreDate);
            }
        }
    }
}
exports.MarketingStatus = MarketingStatus;
class MeasurePopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('criteria')) {
                this.criteria = new Expression(obj.criteria);
            }
        }
    }
}
exports.MeasurePopulationComponent = MeasurePopulationComponent;
class MeasureStratifierComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('criteria')) {
                this.criteria = new Expression(obj.criteria);
            }
        }
    }
}
exports.MeasureStratifierComponent = MeasureStratifierComponent;
class MeasureGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MeasurePopulationComponent(o));
                }
            }
            if (obj.hasOwnProperty('stratifier')) {
                this.stratifier = [];
                for (const o of obj.stratifier || []) {
                    this.stratifier.push(new MeasureStratifierComponent(o));
                }
            }
        }
    }
}
exports.MeasureGroupComponent = MeasureGroupComponent;
class MeasureSupplementalDataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = [];
                for (const o of obj.usage || []) {
                    this.usage.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('criteria')) {
                this.criteria = new Expression(obj.criteria);
            }
        }
    }
}
exports.MeasureSupplementalDataComponent = MeasureSupplementalDataComponent;
class Measure extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Measure';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = [];
                for (const o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('editor')) {
                this.editor = [];
                for (const o of obj.editor || []) {
                    this.editor.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('reviewer')) {
                this.reviewer = [];
                for (const o of obj.reviewer || []) {
                    this.reviewer.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('endorser')) {
                this.endorser = [];
                for (const o of obj.endorser || []) {
                    this.endorser.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('library')) {
                this.library = obj.library;
            }
            if (obj.hasOwnProperty('disclaimer')) {
                this.disclaimer = obj.disclaimer;
            }
            if (obj.hasOwnProperty('scoring')) {
                this.scoring = new CodeableConcept(obj.scoring);
            }
            if (obj.hasOwnProperty('compositeScoring')) {
                this.compositeScoring = new CodeableConcept(obj.compositeScoring);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('riskAdjustment')) {
                this.riskAdjustment = obj.riskAdjustment;
            }
            if (obj.hasOwnProperty('rateAggregation')) {
                this.rateAggregation = obj.rateAggregation;
            }
            if (obj.hasOwnProperty('rationale')) {
                this.rationale = obj.rationale;
            }
            if (obj.hasOwnProperty('clinicalRecommendationStatement')) {
                this.clinicalRecommendationStatement = obj.clinicalRecommendationStatement;
            }
            if (obj.hasOwnProperty('improvementNotation')) {
                this.improvementNotation = obj.improvementNotation;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('guidance')) {
                this.guidance = obj.guidance;
            }
            if (obj.hasOwnProperty('group')) {
                this.group = [];
                for (const o of obj.group || []) {
                    this.group.push(new MeasureGroupComponent(o));
                }
            }
            if (obj.hasOwnProperty('supplementalData')) {
                this.supplementalData = [];
                for (const o of obj.supplementalData || []) {
                    this.supplementalData.push(new MeasureSupplementalDataComponent(o));
                }
            }
        }
    }
}
exports.Measure = Measure;
class MeasureReportPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('count')) {
                this.count = obj.count;
            }
            if (obj.hasOwnProperty('subjectResults')) {
                this.subjectResults = new ResourceReference(obj.subjectResults);
            }
        }
    }
}
exports.MeasureReportPopulationComponent = MeasureReportPopulationComponent;
class MeasureReportStratifierGroupPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('count')) {
                this.count = obj.count;
            }
            if (obj.hasOwnProperty('subjectResults')) {
                this.subjectResults = new ResourceReference(obj.subjectResults);
            }
        }
    }
}
exports.MeasureReportStratifierGroupPopulationComponent = MeasureReportStratifierGroupPopulationComponent;
class MeasureReportStratifierGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new CodeableConcept(obj.value);
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MeasureReportStratifierGroupPopulationComponent(o));
                }
            }
            if (obj.hasOwnProperty('measureScore')) {
                this.measureScore = new Quantity(obj.measureScore);
            }
        }
    }
}
exports.MeasureReportStratifierGroupComponent = MeasureReportStratifierGroupComponent;
class MeasureReportStratifierComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('stratum')) {
                this.stratum = [];
                for (const o of obj.stratum || []) {
                    this.stratum.push(new MeasureReportStratifierGroupComponent(o));
                }
            }
        }
    }
}
exports.MeasureReportStratifierComponent = MeasureReportStratifierComponent;
class MeasureReportGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MeasureReportPopulationComponent(o));
                }
            }
            if (obj.hasOwnProperty('measureScore')) {
                this.measureScore = new Quantity(obj.measureScore);
            }
            if (obj.hasOwnProperty('stratifier')) {
                this.stratifier = [];
                for (const o of obj.stratifier || []) {
                    this.stratifier.push(new MeasureReportStratifierComponent(o));
                }
            }
        }
    }
}
exports.MeasureReportGroupComponent = MeasureReportGroupComponent;
class MeasureReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MeasureReport';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('measure')) {
                this.measure = obj.measure;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('reporter')) {
                this.reporter = new ResourceReference(obj.reporter);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('improvementNotation')) {
                this.improvementNotation = obj.improvementNotation;
            }
            if (obj.hasOwnProperty('group')) {
                this.group = [];
                for (const o of obj.group || []) {
                    this.group.push(new MeasureReportGroupComponent(o));
                }
            }
            if (obj.hasOwnProperty('evaluatedResource')) {
                this.evaluatedResource = [];
                for (const o of obj.evaluatedResource || []) {
                    this.evaluatedResource.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MeasureReport = MeasureReport;
class Media extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Media';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('modality')) {
                this.modality = new CodeableConcept(obj.modality);
            }
            if (obj.hasOwnProperty('view')) {
                this.view = new CodeableConcept(obj.view);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Element(obj.created);
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('operator')) {
                this.operator = new ResourceReference(obj.operator);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('deviceName')) {
                this.deviceName = obj.deviceName;
            }
            if (obj.hasOwnProperty('device')) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.hasOwnProperty('height')) {
                this.height = obj.height;
            }
            if (obj.hasOwnProperty('width')) {
                this.width = obj.width;
            }
            if (obj.hasOwnProperty('frames')) {
                this.frames = obj.frames;
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = obj.duration;
            }
            if (obj.hasOwnProperty('content')) {
                this.content = new Attachment(obj.content);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Media = Media;
class MedicationIngredientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('item')) {
                this.item = new Element(obj.item);
            }
            if (obj.hasOwnProperty('isActive')) {
                this.isActive = obj.isActive;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Ratio(obj.amount);
            }
        }
    }
}
exports.MedicationIngredientComponent = MedicationIngredientComponent;
class MedicationBatchComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('lotNumber')) {
                this.lotNumber = obj.lotNumber;
            }
            if (obj.hasOwnProperty('expirationDate')) {
                this.expirationDate = new Date(obj.expirationDate);
            }
            if (obj.hasOwnProperty('serialNumber')) {
                this.serialNumber = obj.serialNumber;
            }
        }
    }
}
exports.MedicationBatchComponent = MedicationBatchComponent;
class Medication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Medication';
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = new ResourceReference(obj.manufacturer);
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SimpleQuantity(obj.amount);
            }
            if (obj.hasOwnProperty('ingredient')) {
                this.ingredient = [];
                for (const o of obj.ingredient || []) {
                    this.ingredient.push(new MedicationIngredientComponent(o));
                }
            }
            if (obj.hasOwnProperty('batch')) {
                this.batch = new MedicationBatchComponent(obj.batch);
            }
        }
    }
}
exports.Medication = Medication;
class MedicationAdministrationPerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.MedicationAdministrationPerformerComponent = MedicationAdministrationPerformerComponent;
class MedicationAdministrationDosageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('site')) {
                this.site = new CodeableConcept(obj.site);
            }
            if (obj.hasOwnProperty('route')) {
                this.route = new CodeableConcept(obj.route);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('dose')) {
                this.dose = new SimpleQuantity(obj.dose);
            }
            if (obj.hasOwnProperty('rate')) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.MedicationAdministrationDosageComponent = MedicationAdministrationDosageComponent;
class MedicationAdministration extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationAdministration';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiates')) {
                this.instantiates = obj.instantiates;
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('effective')) {
                this.effective = new Element(obj.effective);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new MedicationAdministrationPerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = [];
                for (const o of obj.statusReason || []) {
                    this.statusReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('device')) {
                this.device = [];
                for (const o of obj.device || []) {
                    this.device.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('dosage')) {
                this.dosage = new MedicationAdministrationDosageComponent(obj.dosage);
            }
            if (obj.hasOwnProperty('eventHistory')) {
                this.eventHistory = [];
                for (const o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationAdministration = MedicationAdministration;
class MedicationDispensePerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
        }
    }
}
exports.MedicationDispensePerformerComponent = MedicationDispensePerformerComponent;
class MedicationDispenseSubstitutionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('wasSubstituted')) {
                this.wasSubstituted = obj.wasSubstituted;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('responsibleParty')) {
                this.responsibleParty = [];
                for (const o of obj.responsibleParty || []) {
                    this.responsibleParty.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationDispenseSubstitutionComponent = MedicationDispenseSubstitutionComponent;
class MedicationDispense extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationDispense';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new MedicationDispensePerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('authorizingPrescription')) {
                this.authorizingPrescription = [];
                for (const o of obj.authorizingPrescription || []) {
                    this.authorizingPrescription.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('daysSupply')) {
                this.daysSupply = new SimpleQuantity(obj.daysSupply);
            }
            if (obj.hasOwnProperty('whenPrepared')) {
                this.whenPrepared = new Date(obj.whenPrepared);
            }
            if (obj.hasOwnProperty('whenHandedOver')) {
                this.whenHandedOver = new Date(obj.whenHandedOver);
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.hasOwnProperty('receiver')) {
                this.receiver = [];
                for (const o of obj.receiver || []) {
                    this.receiver.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('dosageInstruction')) {
                this.dosageInstruction = [];
                for (const o of obj.dosageInstruction || []) {
                    this.dosageInstruction.push(new Dosage(o));
                }
            }
            if (obj.hasOwnProperty('substitution')) {
                this.substitution = new MedicationDispenseSubstitutionComponent(obj.substitution);
            }
            if (obj.hasOwnProperty('detectedIssue')) {
                this.detectedIssue = [];
                for (const o of obj.detectedIssue || []) {
                    this.detectedIssue.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new Element(obj.statusReason);
            }
            if (obj.hasOwnProperty('eventHistory')) {
                this.eventHistory = [];
                for (const o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationDispense = MedicationDispense;
class MedicationKnowledgeRelatedMedicationKnowledgeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = [];
                for (const o of obj.reference || []) {
                    this.reference.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationKnowledgeRelatedMedicationKnowledgeComponent = MedicationKnowledgeRelatedMedicationKnowledgeComponent;
class MedicationKnowledgeMonographComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
        }
    }
}
exports.MedicationKnowledgeMonographComponent = MedicationKnowledgeMonographComponent;
class MedicationKnowledgeIngredientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('item')) {
                this.item = new Element(obj.item);
            }
            if (obj.hasOwnProperty('isActive')) {
                this.isActive = obj.isActive;
            }
            if (obj.hasOwnProperty('strength')) {
                this.strength = new Ratio(obj.strength);
            }
        }
    }
}
exports.MedicationKnowledgeIngredientComponent = MedicationKnowledgeIngredientComponent;
class MedicationKnowledgeCostComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('cost')) {
                this.cost = new Money(obj.cost);
            }
        }
    }
}
exports.MedicationKnowledgeCostComponent = MedicationKnowledgeCostComponent;
class MedicationKnowledgeMonitoringProgramComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
        }
    }
}
exports.MedicationKnowledgeMonitoringProgramComponent = MedicationKnowledgeMonitoringProgramComponent;
class MedicationKnowledgeDosageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('dosage')) {
                this.dosage = [];
                for (const o of obj.dosage || []) {
                    this.dosage.push(new Dosage(o));
                }
            }
        }
    }
}
exports.MedicationKnowledgeDosageComponent = MedicationKnowledgeDosageComponent;
class MedicationKnowledgePatientCharacteristicsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('characteristic')) {
                this.characteristic = new Element(obj.characteristic);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.MedicationKnowledgePatientCharacteristicsComponent = MedicationKnowledgePatientCharacteristicsComponent;
class MedicationKnowledgeAdministrationGuidelinesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('dosage')) {
                this.dosage = [];
                for (const o of obj.dosage || []) {
                    this.dosage.push(new MedicationKnowledgeDosageComponent(o));
                }
            }
            if (obj.hasOwnProperty('indication')) {
                this.indication = new Element(obj.indication);
            }
            if (obj.hasOwnProperty('patientCharacteristics')) {
                this.patientCharacteristics = [];
                for (const o of obj.patientCharacteristics || []) {
                    this.patientCharacteristics.push(new MedicationKnowledgePatientCharacteristicsComponent(o));
                }
            }
        }
    }
}
exports.MedicationKnowledgeAdministrationGuidelinesComponent = MedicationKnowledgeAdministrationGuidelinesComponent;
class MedicationKnowledgeMedicineClassificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = [];
                for (const o of obj.classification || []) {
                    this.classification.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.MedicationKnowledgeMedicineClassificationComponent = MedicationKnowledgeMedicineClassificationComponent;
class MedicationKnowledgePackagingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
        }
    }
}
exports.MedicationKnowledgePackagingComponent = MedicationKnowledgePackagingComponent;
class MedicationKnowledgeDrugCharacteristicComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.MedicationKnowledgeDrugCharacteristicComponent = MedicationKnowledgeDrugCharacteristicComponent;
class MedicationKnowledgeSubstitutionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('allowed')) {
                this.allowed = obj.allowed;
            }
        }
    }
}
exports.MedicationKnowledgeSubstitutionComponent = MedicationKnowledgeSubstitutionComponent;
class MedicationKnowledgeScheduleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = new CodeableConcept(obj.schedule);
            }
        }
    }
}
exports.MedicationKnowledgeScheduleComponent = MedicationKnowledgeScheduleComponent;
class MedicationKnowledgeMaxDispenseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Duration(obj.period);
            }
        }
    }
}
exports.MedicationKnowledgeMaxDispenseComponent = MedicationKnowledgeMaxDispenseComponent;
class MedicationKnowledgeRegulatoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('regulatoryAuthority')) {
                this.regulatoryAuthority = new ResourceReference(obj.regulatoryAuthority);
            }
            if (obj.hasOwnProperty('substitution')) {
                this.substitution = [];
                for (const o of obj.substitution || []) {
                    this.substitution.push(new MedicationKnowledgeSubstitutionComponent(o));
                }
            }
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = [];
                for (const o of obj.schedule || []) {
                    this.schedule.push(new MedicationKnowledgeScheduleComponent(o));
                }
            }
            if (obj.hasOwnProperty('maxDispense')) {
                this.maxDispense = new MedicationKnowledgeMaxDispenseComponent(obj.maxDispense);
            }
        }
    }
}
exports.MedicationKnowledgeRegulatoryComponent = MedicationKnowledgeRegulatoryComponent;
class MedicationKnowledgeKineticsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('areaUnderCurve')) {
                this.areaUnderCurve = [];
                for (const o of obj.areaUnderCurve || []) {
                    this.areaUnderCurve.push(new SimpleQuantity(o));
                }
            }
            if (obj.hasOwnProperty('lethalDose50')) {
                this.lethalDose50 = [];
                for (const o of obj.lethalDose50 || []) {
                    this.lethalDose50.push(new SimpleQuantity(o));
                }
            }
            if (obj.hasOwnProperty('halfLifePeriod')) {
                this.halfLifePeriod = new Duration(obj.halfLifePeriod);
            }
        }
    }
}
exports.MedicationKnowledgeKineticsComponent = MedicationKnowledgeKineticsComponent;
class MedicationKnowledge extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationKnowledge';
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = new ResourceReference(obj.manufacturer);
            }
            if (obj.hasOwnProperty('doseForm')) {
                this.doseForm = new CodeableConcept(obj.doseForm);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SimpleQuantity(obj.amount);
            }
            if (obj.hasOwnProperty('synonym')) {
                this.synonym = obj.synonym;
            }
            if (obj.hasOwnProperty('relatedMedicationKnowledge')) {
                this.relatedMedicationKnowledge = [];
                for (const o of obj.relatedMedicationKnowledge || []) {
                    this.relatedMedicationKnowledge.push(new MedicationKnowledgeRelatedMedicationKnowledgeComponent(o));
                }
            }
            if (obj.hasOwnProperty('associatedMedication')) {
                this.associatedMedication = [];
                for (const o of obj.associatedMedication || []) {
                    this.associatedMedication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('productType')) {
                this.productType = [];
                for (const o of obj.productType || []) {
                    this.productType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('monograph')) {
                this.monograph = [];
                for (const o of obj.monograph || []) {
                    this.monograph.push(new MedicationKnowledgeMonographComponent(o));
                }
            }
            if (obj.hasOwnProperty('ingredient')) {
                this.ingredient = [];
                for (const o of obj.ingredient || []) {
                    this.ingredient.push(new MedicationKnowledgeIngredientComponent(o));
                }
            }
            if (obj.hasOwnProperty('preparationInstruction')) {
                this.preparationInstruction = obj.preparationInstruction;
            }
            if (obj.hasOwnProperty('intendedRoute')) {
                this.intendedRoute = [];
                for (const o of obj.intendedRoute || []) {
                    this.intendedRoute.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('cost')) {
                this.cost = [];
                for (const o of obj.cost || []) {
                    this.cost.push(new MedicationKnowledgeCostComponent(o));
                }
            }
            if (obj.hasOwnProperty('monitoringProgram')) {
                this.monitoringProgram = [];
                for (const o of obj.monitoringProgram || []) {
                    this.monitoringProgram.push(new MedicationKnowledgeMonitoringProgramComponent(o));
                }
            }
            if (obj.hasOwnProperty('administrationGuidelines')) {
                this.administrationGuidelines = [];
                for (const o of obj.administrationGuidelines || []) {
                    this.administrationGuidelines.push(new MedicationKnowledgeAdministrationGuidelinesComponent(o));
                }
            }
            if (obj.hasOwnProperty('medicineClassification')) {
                this.medicineClassification = [];
                for (const o of obj.medicineClassification || []) {
                    this.medicineClassification.push(new MedicationKnowledgeMedicineClassificationComponent(o));
                }
            }
            if (obj.hasOwnProperty('packaging')) {
                this.packaging = new MedicationKnowledgePackagingComponent(obj.packaging);
            }
            if (obj.hasOwnProperty('drugCharacteristic')) {
                this.drugCharacteristic = [];
                for (const o of obj.drugCharacteristic || []) {
                    this.drugCharacteristic.push(new MedicationKnowledgeDrugCharacteristicComponent(o));
                }
            }
            if (obj.hasOwnProperty('contraindication')) {
                this.contraindication = [];
                for (const o of obj.contraindication || []) {
                    this.contraindication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('regulatory')) {
                this.regulatory = [];
                for (const o of obj.regulatory || []) {
                    this.regulatory.push(new MedicationKnowledgeRegulatoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('kinetics')) {
                this.kinetics = [];
                for (const o of obj.kinetics || []) {
                    this.kinetics.push(new MedicationKnowledgeKineticsComponent(o));
                }
            }
        }
    }
}
exports.MedicationKnowledge = MedicationKnowledge;
class MedicationRequestInitialFillComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new Duration(obj.duration);
            }
        }
    }
}
exports.MedicationRequestInitialFillComponent = MedicationRequestInitialFillComponent;
class MedicationRequestDispenseRequestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('initialFill')) {
                this.initialFill = new MedicationRequestInitialFillComponent(obj.initialFill);
            }
            if (obj.hasOwnProperty('dispenseInterval')) {
                this.dispenseInterval = new Duration(obj.dispenseInterval);
            }
            if (obj.hasOwnProperty('validityPeriod')) {
                this.validityPeriod = new Period(obj.validityPeriod);
            }
            if (obj.hasOwnProperty('numberOfRepeatsAllowed')) {
                this.numberOfRepeatsAllowed = obj.numberOfRepeatsAllowed;
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('expectedSupplyDuration')) {
                this.expectedSupplyDuration = new Duration(obj.expectedSupplyDuration);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
        }
    }
}
exports.MedicationRequestDispenseRequestComponent = MedicationRequestDispenseRequestComponent;
class MedicationRequestSubstitutionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('allowed')) {
                this.allowed = obj.allowed;
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new CodeableConcept(obj.reason);
            }
        }
    }
}
exports.MedicationRequestSubstitutionComponent = MedicationRequestSubstitutionComponent;
class MedicationRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = [];
                for (const o of obj.supportingInformation || []) {
                    this.supportingInformation.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('performerType')) {
                this.performerType = new CodeableConcept(obj.performerType);
            }
            if (obj.hasOwnProperty('recorder')) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('instantiates')) {
                this.instantiates = obj.instantiates;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('groupIdentifier')) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('courseOfTherapyType')) {
                this.courseOfTherapyType = new CodeableConcept(obj.courseOfTherapyType);
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('dosageInstruction')) {
                this.dosageInstruction = [];
                for (const o of obj.dosageInstruction || []) {
                    this.dosageInstruction.push(new Dosage(o));
                }
            }
            if (obj.hasOwnProperty('dispenseRequest')) {
                this.dispenseRequest = new MedicationRequestDispenseRequestComponent(obj.dispenseRequest);
            }
            if (obj.hasOwnProperty('substitution')) {
                this.substitution = new MedicationRequestSubstitutionComponent(obj.substitution);
            }
            if (obj.hasOwnProperty('priorPrescription')) {
                this.priorPrescription = new ResourceReference(obj.priorPrescription);
            }
            if (obj.hasOwnProperty('detectedIssue')) {
                this.detectedIssue = [];
                for (const o of obj.detectedIssue || []) {
                    this.detectedIssue.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('eventHistory')) {
                this.eventHistory = [];
                for (const o of obj.eventHistory || []) {
                    this.eventHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicationRequest = MedicationRequest;
class MedicationStatement extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicationStatement';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = [];
                for (const o of obj.statusReason || []) {
                    this.statusReason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('effective')) {
                this.effective = new Element(obj.effective);
            }
            if (obj.hasOwnProperty('dateAsserted')) {
                this.dateAsserted = new Date(obj.dateAsserted);
            }
            if (obj.hasOwnProperty('informationSource')) {
                this.informationSource = new ResourceReference(obj.informationSource);
            }
            if (obj.hasOwnProperty('derivedFrom')) {
                this.derivedFrom = [];
                for (const o of obj.derivedFrom || []) {
                    this.derivedFrom.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('dosage')) {
                this.dosage = [];
                for (const o of obj.dosage || []) {
                    this.dosage.push(new Dosage(o));
                }
            }
        }
    }
}
exports.MedicationStatement = MedicationStatement;
class MedicinalProductNamePartComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('part')) {
                this.part = obj.part;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
        }
    }
}
exports.MedicinalProductNamePartComponent = MedicinalProductNamePartComponent;
class MedicinalProductCountryLanguageComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('country')) {
                this.country = new CodeableConcept(obj.country);
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = new CodeableConcept(obj.jurisdiction);
            }
            if (obj.hasOwnProperty('language')) {
                this.language = new CodeableConcept(obj.language);
            }
        }
    }
}
exports.MedicinalProductCountryLanguageComponent = MedicinalProductCountryLanguageComponent;
class MedicinalProductNameComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('productName')) {
                this.productName = obj.productName;
            }
            if (obj.hasOwnProperty('namePart')) {
                this.namePart = [];
                for (const o of obj.namePart || []) {
                    this.namePart.push(new MedicinalProductNamePartComponent(o));
                }
            }
            if (obj.hasOwnProperty('countryLanguage')) {
                this.countryLanguage = [];
                for (const o of obj.countryLanguage || []) {
                    this.countryLanguage.push(new MedicinalProductCountryLanguageComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductNameComponent = MedicinalProductNameComponent;
class MedicinalProductManufacturingBusinessOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operationType')) {
                this.operationType = new CodeableConcept(obj.operationType);
            }
            if (obj.hasOwnProperty('authorisationReferenceNumber')) {
                this.authorisationReferenceNumber = new Identifier(obj.authorisationReferenceNumber);
            }
            if (obj.hasOwnProperty('effectiveDate')) {
                this.effectiveDate = new Date(obj.effectiveDate);
            }
            if (obj.hasOwnProperty('confidentialityIndicator')) {
                this.confidentialityIndicator = new CodeableConcept(obj.confidentialityIndicator);
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('regulator')) {
                this.regulator = new ResourceReference(obj.regulator);
            }
        }
    }
}
exports.MedicinalProductManufacturingBusinessOperationComponent = MedicinalProductManufacturingBusinessOperationComponent;
class MedicinalProductSpecialDesignationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('intendedUse')) {
                this.intendedUse = new CodeableConcept(obj.intendedUse);
            }
            if (obj.hasOwnProperty('indication')) {
                this.indication = new CodeableConcept(obj.indication);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('species')) {
                this.species = new CodeableConcept(obj.species);
            }
        }
    }
}
exports.MedicinalProductSpecialDesignationComponent = MedicinalProductSpecialDesignationComponent;
class MedicinalProduct extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProduct';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('domain')) {
                this.domain = new Coding(obj.domain);
            }
            if (obj.hasOwnProperty('combinedPharmaceuticalDoseForm')) {
                this.combinedPharmaceuticalDoseForm = new CodeableConcept(obj.combinedPharmaceuticalDoseForm);
            }
            if (obj.hasOwnProperty('additionalMonitoringIndicator')) {
                this.additionalMonitoringIndicator = new CodeableConcept(obj.additionalMonitoringIndicator);
            }
            if (obj.hasOwnProperty('specialMeasures')) {
                this.specialMeasures = obj.specialMeasures;
            }
            if (obj.hasOwnProperty('paediatricUseIndicator')) {
                this.paediatricUseIndicator = new CodeableConcept(obj.paediatricUseIndicator);
            }
            if (obj.hasOwnProperty('productClassification')) {
                this.productClassification = [];
                for (const o of obj.productClassification || []) {
                    this.productClassification.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('marketingStatus')) {
                this.marketingStatus = [];
                for (const o of obj.marketingStatus || []) {
                    this.marketingStatus.push(new MarketingStatus(o));
                }
            }
            if (obj.hasOwnProperty('marketingAuthorization')) {
                this.marketingAuthorization = new ResourceReference(obj.marketingAuthorization);
            }
            if (obj.hasOwnProperty('packagedMedicinalProduct')) {
                this.packagedMedicinalProduct = [];
                for (const o of obj.packagedMedicinalProduct || []) {
                    this.packagedMedicinalProduct.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('pharmaceuticalProduct')) {
                this.pharmaceuticalProduct = [];
                for (const o of obj.pharmaceuticalProduct || []) {
                    this.pharmaceuticalProduct.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('contraindication')) {
                this.contraindication = [];
                for (const o of obj.contraindication || []) {
                    this.contraindication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = [];
                for (const o of obj.interaction || []) {
                    this.interaction.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('therapeuticIndication')) {
                this.therapeuticIndication = [];
                for (const o of obj.therapeuticIndication || []) {
                    this.therapeuticIndication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('undesirableEffect')) {
                this.undesirableEffect = [];
                for (const o of obj.undesirableEffect || []) {
                    this.undesirableEffect.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('attachedDocument')) {
                this.attachedDocument = [];
                for (const o of obj.attachedDocument || []) {
                    this.attachedDocument.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('masterFile')) {
                this.masterFile = [];
                for (const o of obj.masterFile || []) {
                    this.masterFile.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('clinicalTrial')) {
                this.clinicalTrial = [];
                for (const o of obj.clinicalTrial || []) {
                    this.clinicalTrial.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = [];
                for (const o of obj.name || []) {
                    this.name.push(new MedicinalProductNameComponent(o));
                }
            }
            if (obj.hasOwnProperty('crossReference')) {
                this.crossReference = [];
                for (const o of obj.crossReference || []) {
                    this.crossReference.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('manufacturingBusinessOperation')) {
                this.manufacturingBusinessOperation = [];
                for (const o of obj.manufacturingBusinessOperation || []) {
                    this.manufacturingBusinessOperation.push(new MedicinalProductManufacturingBusinessOperationComponent(o));
                }
            }
            if (obj.hasOwnProperty('specialDesignation')) {
                this.specialDesignation = [];
                for (const o of obj.specialDesignation || []) {
                    this.specialDesignation.push(new MedicinalProductSpecialDesignationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProduct = MedicinalProduct;
class MedicinalProductAuthorizationJurisdictionalAuthorizationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('country')) {
                this.country = new CodeableConcept(obj.country);
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('legalStatusOfSupply')) {
                this.legalStatusOfSupply = new CodeableConcept(obj.legalStatusOfSupply);
            }
            if (obj.hasOwnProperty('validityPeriod')) {
                this.validityPeriod = new Period(obj.validityPeriod);
            }
        }
    }
}
exports.MedicinalProductAuthorizationJurisdictionalAuthorizationComponent = MedicinalProductAuthorizationJurisdictionalAuthorizationComponent;
class MedicinalProductAuthorizationProcedureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Element(obj.date);
            }
            if (obj.hasOwnProperty('application')) {
                this.application = [];
                for (const o of obj.application || []) {
                    this.application.push(new MedicinalProductAuthorizationProcedureComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductAuthorizationProcedureComponent = MedicinalProductAuthorizationProcedureComponent;
class MedicinalProductAuthorization extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductAuthorization';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('country')) {
                this.country = [];
                for (const o of obj.country || []) {
                    this.country.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('legalStatusOfSupply')) {
                this.legalStatusOfSupply = new CodeableConcept(obj.legalStatusOfSupply);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('statusDate')) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.hasOwnProperty('restoreDate')) {
                this.restoreDate = new Date(obj.restoreDate);
            }
            if (obj.hasOwnProperty('validityPeriod')) {
                this.validityPeriod = new Period(obj.validityPeriod);
            }
            if (obj.hasOwnProperty('dataExclusivityPeriod')) {
                this.dataExclusivityPeriod = new Period(obj.dataExclusivityPeriod);
            }
            if (obj.hasOwnProperty('dateOfFirstAuthorization')) {
                this.dateOfFirstAuthorization = new Date(obj.dateOfFirstAuthorization);
            }
            if (obj.hasOwnProperty('internationalBirthDate')) {
                this.internationalBirthDate = new Date(obj.internationalBirthDate);
            }
            if (obj.hasOwnProperty('legalBasis')) {
                this.legalBasis = new CodeableConcept(obj.legalBasis);
            }
            if (obj.hasOwnProperty('jurisdictionalAuthorization')) {
                this.jurisdictionalAuthorization = [];
                for (const o of obj.jurisdictionalAuthorization || []) {
                    this.jurisdictionalAuthorization.push(new MedicinalProductAuthorizationJurisdictionalAuthorizationComponent(o));
                }
            }
            if (obj.hasOwnProperty('holder')) {
                this.holder = new ResourceReference(obj.holder);
            }
            if (obj.hasOwnProperty('regulator')) {
                this.regulator = new ResourceReference(obj.regulator);
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = new MedicinalProductAuthorizationProcedureComponent(obj.procedure);
            }
        }
    }
}
exports.MedicinalProductAuthorization = MedicinalProductAuthorization;
class MedicinalProductClinicalsPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('age')) {
                this.age = new Element(obj.age);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = new CodeableConcept(obj.gender);
            }
            if (obj.hasOwnProperty('race')) {
                this.race = new CodeableConcept(obj.race);
            }
            if (obj.hasOwnProperty('physiologicalCondition')) {
                this.physiologicalCondition = new CodeableConcept(obj.physiologicalCondition);
            }
        }
    }
}
exports.MedicinalProductClinicalsPopulationComponent = MedicinalProductClinicalsPopulationComponent;
class MedicinalProductClinicalsUndesirableEffectsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('symptomConditionEffect')) {
                this.symptomConditionEffect = new CodeableConcept(obj.symptomConditionEffect);
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = new CodeableConcept(obj.classification);
            }
            if (obj.hasOwnProperty('frequencyOfOccurrence')) {
                this.frequencyOfOccurrence = new CodeableConcept(obj.frequencyOfOccurrence);
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductClinicalsPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductClinicalsUndesirableEffectsComponent = MedicinalProductClinicalsUndesirableEffectsComponent;
class MedicinalProductClinicalsOtherTherapyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('therapyRelationshipType')) {
                this.therapyRelationshipType = new CodeableConcept(obj.therapyRelationshipType);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
        }
    }
}
exports.MedicinalProductClinicalsOtherTherapyComponent = MedicinalProductClinicalsOtherTherapyComponent;
class MedicinalProductClinicalsTherapeuticIndicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('diseaseSymptomProcedure')) {
                this.diseaseSymptomProcedure = new CodeableConcept(obj.diseaseSymptomProcedure);
            }
            if (obj.hasOwnProperty('diseaseStatus')) {
                this.diseaseStatus = new CodeableConcept(obj.diseaseStatus);
            }
            if (obj.hasOwnProperty('comorbidity')) {
                this.comorbidity = [];
                for (const o of obj.comorbidity || []) {
                    this.comorbidity.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('intendedEffect')) {
                this.intendedEffect = new CodeableConcept(obj.intendedEffect);
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new Quantity(obj.duration);
            }
            if (obj.hasOwnProperty('undesirableEffects')) {
                this.undesirableEffects = [];
                for (const o of obj.undesirableEffects || []) {
                    this.undesirableEffects.push(new MedicinalProductClinicalsUndesirableEffectsComponent(o));
                }
            }
            if (obj.hasOwnProperty('otherTherapy')) {
                this.otherTherapy = [];
                for (const o of obj.otherTherapy || []) {
                    this.otherTherapy.push(new MedicinalProductClinicalsOtherTherapyComponent(o));
                }
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductClinicalsPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductClinicalsTherapeuticIndicationComponent = MedicinalProductClinicalsTherapeuticIndicationComponent;
class MedicinalProductClinicalsContraindicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('disease')) {
                this.disease = new CodeableConcept(obj.disease);
            }
            if (obj.hasOwnProperty('diseaseStatus')) {
                this.diseaseStatus = new CodeableConcept(obj.diseaseStatus);
            }
            if (obj.hasOwnProperty('comorbidity')) {
                this.comorbidity = [];
                for (const o of obj.comorbidity || []) {
                    this.comorbidity.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('therapeuticIndication')) {
                this.therapeuticIndication = [];
                for (const o of obj.therapeuticIndication || []) {
                    this.therapeuticIndication.push(new MedicinalProductClinicalsTherapeuticIndicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('otherTherapy')) {
                this.otherTherapy = [];
                for (const o of obj.otherTherapy || []) {
                    this.otherTherapy.push(new MedicinalProductClinicalsOtherTherapyComponent(o));
                }
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductClinicalsPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductClinicalsContraindicationComponent = MedicinalProductClinicalsContraindicationComponent;
class MedicinalProductClinicalsInteractionsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = obj.interaction;
            }
            if (obj.hasOwnProperty('interactant')) {
                this.interactant = [];
                for (const o of obj.interactant || []) {
                    this.interactant.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('effect')) {
                this.effect = new CodeableConcept(obj.effect);
            }
            if (obj.hasOwnProperty('incidence')) {
                this.incidence = new CodeableConcept(obj.incidence);
            }
            if (obj.hasOwnProperty('management')) {
                this.management = new CodeableConcept(obj.management);
            }
        }
    }
}
exports.MedicinalProductClinicalsInteractionsComponent = MedicinalProductClinicalsInteractionsComponent;
class MedicinalProductClinicals extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductClinicals';
        if (obj) {
            if (obj.hasOwnProperty('undesirableEffects')) {
                this.undesirableEffects = [];
                for (const o of obj.undesirableEffects || []) {
                    this.undesirableEffects.push(new MedicinalProductClinicalsUndesirableEffectsComponent(o));
                }
            }
            if (obj.hasOwnProperty('therapeuticIndication')) {
                this.therapeuticIndication = [];
                for (const o of obj.therapeuticIndication || []) {
                    this.therapeuticIndication.push(new MedicinalProductClinicalsTherapeuticIndicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('contraindication')) {
                this.contraindication = [];
                for (const o of obj.contraindication || []) {
                    this.contraindication.push(new MedicinalProductClinicalsContraindicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('interactions')) {
                this.interactions = [];
                for (const o of obj.interactions || []) {
                    this.interactions.push(new MedicinalProductClinicalsInteractionsComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductClinicals = MedicinalProductClinicals;
class MedicinalProductContraindicationOtherTherapyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('therapyRelationshipType')) {
                this.therapyRelationshipType = new CodeableConcept(obj.therapyRelationshipType);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
        }
    }
}
exports.MedicinalProductContraindicationOtherTherapyComponent = MedicinalProductContraindicationOtherTherapyComponent;
class MedicinalProductContraindicationPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('age')) {
                this.age = new Element(obj.age);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = new CodeableConcept(obj.gender);
            }
            if (obj.hasOwnProperty('race')) {
                this.race = new CodeableConcept(obj.race);
            }
            if (obj.hasOwnProperty('physiologicalCondition')) {
                this.physiologicalCondition = new CodeableConcept(obj.physiologicalCondition);
            }
        }
    }
}
exports.MedicinalProductContraindicationPopulationComponent = MedicinalProductContraindicationPopulationComponent;
class MedicinalProductContraindication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductContraindication';
        if (obj) {
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('disease')) {
                this.disease = new CodeableConcept(obj.disease);
            }
            if (obj.hasOwnProperty('diseaseStatus')) {
                this.diseaseStatus = new CodeableConcept(obj.diseaseStatus);
            }
            if (obj.hasOwnProperty('comorbidity')) {
                this.comorbidity = [];
                for (const o of obj.comorbidity || []) {
                    this.comorbidity.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('therapeuticIndication')) {
                this.therapeuticIndication = [];
                for (const o of obj.therapeuticIndication || []) {
                    this.therapeuticIndication.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('otherTherapy')) {
                this.otherTherapy = [];
                for (const o of obj.otherTherapy || []) {
                    this.otherTherapy.push(new MedicinalProductContraindicationOtherTherapyComponent(o));
                }
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductContraindicationPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductContraindication = MedicinalProductContraindication;
class MedicinalProductDeviceSpecMaterialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('substance')) {
                this.substance = new CodeableConcept(obj.substance);
            }
            if (obj.hasOwnProperty('alternate')) {
                this.alternate = obj.alternate;
            }
            if (obj.hasOwnProperty('allergenicIndicator')) {
                this.allergenicIndicator = obj.allergenicIndicator;
            }
        }
    }
}
exports.MedicinalProductDeviceSpecMaterialComponent = MedicinalProductDeviceSpecMaterialComponent;
class MedicinalProductDeviceSpec extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductDeviceSpec';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('tradeName')) {
                this.tradeName = obj.tradeName;
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('listingNumber')) {
                this.listingNumber = obj.listingNumber;
            }
            if (obj.hasOwnProperty('modelNumber')) {
                this.modelNumber = obj.modelNumber;
            }
            if (obj.hasOwnProperty('sterilityIndicator')) {
                this.sterilityIndicator = new CodeableConcept(obj.sterilityIndicator);
            }
            if (obj.hasOwnProperty('sterilisationRequirement')) {
                this.sterilisationRequirement = new CodeableConcept(obj.sterilisationRequirement);
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = new CodeableConcept(obj.usage);
            }
            if (obj.hasOwnProperty('nomenclature')) {
                this.nomenclature = [];
                for (const o of obj.nomenclature || []) {
                    this.nomenclature.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('shelfLifeStorage')) {
                this.shelfLifeStorage = [];
                for (const o of obj.shelfLifeStorage || []) {
                    this.shelfLifeStorage.push(new ProductShelfLife(o));
                }
            }
            if (obj.hasOwnProperty('physicalCharacteristics')) {
                this.physicalCharacteristics = new ProdCharacteristic(obj.physicalCharacteristics);
            }
            if (obj.hasOwnProperty('otherCharacteristics')) {
                this.otherCharacteristics = [];
                for (const o of obj.otherCharacteristics || []) {
                    this.otherCharacteristics.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('batchIdentifier')) {
                this.batchIdentifier = [];
                for (const o of obj.batchIdentifier || []) {
                    this.batchIdentifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('material')) {
                this.material = [];
                for (const o of obj.material || []) {
                    this.material.push(new MedicinalProductDeviceSpecMaterialComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductDeviceSpec = MedicinalProductDeviceSpec;
class MedicinalProductIndicationOtherTherapyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('therapyRelationshipType')) {
                this.therapyRelationshipType = new CodeableConcept(obj.therapyRelationshipType);
            }
            if (obj.hasOwnProperty('medication')) {
                this.medication = new Element(obj.medication);
            }
        }
    }
}
exports.MedicinalProductIndicationOtherTherapyComponent = MedicinalProductIndicationOtherTherapyComponent;
class MedicinalProductIndicationPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('age')) {
                this.age = new Element(obj.age);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = new CodeableConcept(obj.gender);
            }
            if (obj.hasOwnProperty('race')) {
                this.race = new CodeableConcept(obj.race);
            }
            if (obj.hasOwnProperty('physiologicalCondition')) {
                this.physiologicalCondition = new CodeableConcept(obj.physiologicalCondition);
            }
        }
    }
}
exports.MedicinalProductIndicationPopulationComponent = MedicinalProductIndicationPopulationComponent;
class MedicinalProductIndication extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductIndication';
        if (obj) {
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('diseaseSymptomProcedure')) {
                this.diseaseSymptomProcedure = new CodeableConcept(obj.diseaseSymptomProcedure);
            }
            if (obj.hasOwnProperty('diseaseStatus')) {
                this.diseaseStatus = new CodeableConcept(obj.diseaseStatus);
            }
            if (obj.hasOwnProperty('comorbidity')) {
                this.comorbidity = [];
                for (const o of obj.comorbidity || []) {
                    this.comorbidity.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('intendedEffect')) {
                this.intendedEffect = new CodeableConcept(obj.intendedEffect);
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new Quantity(obj.duration);
            }
            if (obj.hasOwnProperty('otherTherapy')) {
                this.otherTherapy = [];
                for (const o of obj.otherTherapy || []) {
                    this.otherTherapy.push(new MedicinalProductIndicationOtherTherapyComponent(o));
                }
            }
            if (obj.hasOwnProperty('undesirableEffect')) {
                this.undesirableEffect = [];
                for (const o of obj.undesirableEffect || []) {
                    this.undesirableEffect.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductIndicationPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductIndication = MedicinalProductIndication;
class MedicinalProductIngredientReferenceStrengthComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('substance')) {
                this.substance = new CodeableConcept(obj.substance);
            }
            if (obj.hasOwnProperty('strength')) {
                this.strength = new Ratio(obj.strength);
            }
            if (obj.hasOwnProperty('measurementPoint')) {
                this.measurementPoint = obj.measurementPoint;
            }
            if (obj.hasOwnProperty('country')) {
                this.country = [];
                for (const o of obj.country || []) {
                    this.country.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.MedicinalProductIngredientReferenceStrengthComponent = MedicinalProductIngredientReferenceStrengthComponent;
class MedicinalProductIngredientStrengthComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('presentation')) {
                this.presentation = new Ratio(obj.presentation);
            }
            if (obj.hasOwnProperty('presentationLowLimit')) {
                this.presentationLowLimit = new Ratio(obj.presentationLowLimit);
            }
            if (obj.hasOwnProperty('concentration')) {
                this.concentration = new Ratio(obj.concentration);
            }
            if (obj.hasOwnProperty('concentrationLowLimit')) {
                this.concentrationLowLimit = new Ratio(obj.concentrationLowLimit);
            }
            if (obj.hasOwnProperty('measurementPoint')) {
                this.measurementPoint = obj.measurementPoint;
            }
            if (obj.hasOwnProperty('country')) {
                this.country = [];
                for (const o of obj.country || []) {
                    this.country.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('referenceStrength')) {
                this.referenceStrength = [];
                for (const o of obj.referenceStrength || []) {
                    this.referenceStrength.push(new MedicinalProductIngredientReferenceStrengthComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductIngredientStrengthComponent = MedicinalProductIngredientStrengthComponent;
class MedicinalProductIngredientSpecifiedSubstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('group')) {
                this.group = new CodeableConcept(obj.group);
            }
            if (obj.hasOwnProperty('confidentiality')) {
                this.confidentiality = new CodeableConcept(obj.confidentiality);
            }
            if (obj.hasOwnProperty('strength')) {
                this.strength = [];
                for (const o of obj.strength || []) {
                    this.strength.push(new MedicinalProductIngredientStrengthComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductIngredientSpecifiedSubstanceComponent = MedicinalProductIngredientSpecifiedSubstanceComponent;
class MedicinalProductIngredientSubstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('strength')) {
                this.strength = [];
                for (const o of obj.strength || []) {
                    this.strength.push(new MedicinalProductIngredientStrengthComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductIngredientSubstanceComponent = MedicinalProductIngredientSubstanceComponent;
class MedicinalProductIngredient extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductIngredient';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('allergenicIndicator')) {
                this.allergenicIndicator = obj.allergenicIndicator;
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('specifiedSubstance')) {
                this.specifiedSubstance = [];
                for (const o of obj.specifiedSubstance || []) {
                    this.specifiedSubstance.push(new MedicinalProductIngredientSpecifiedSubstanceComponent(o));
                }
            }
            if (obj.hasOwnProperty('substance')) {
                this.substance = new MedicinalProductIngredientSubstanceComponent(obj.substance);
            }
        }
    }
}
exports.MedicinalProductIngredient = MedicinalProductIngredient;
class MedicinalProductInteraction extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductInteraction';
        if (obj) {
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = obj.interaction;
            }
            if (obj.hasOwnProperty('interactant')) {
                this.interactant = [];
                for (const o of obj.interactant || []) {
                    this.interactant.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('effect')) {
                this.effect = new CodeableConcept(obj.effect);
            }
            if (obj.hasOwnProperty('incidence')) {
                this.incidence = new CodeableConcept(obj.incidence);
            }
            if (obj.hasOwnProperty('management')) {
                this.management = new CodeableConcept(obj.management);
            }
        }
    }
}
exports.MedicinalProductInteraction = MedicinalProductInteraction;
class MedicinalProductManufactured extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductManufactured';
        if (obj) {
            if (obj.hasOwnProperty('manufacturedDoseForm')) {
                this.manufacturedDoseForm = new CodeableConcept(obj.manufacturedDoseForm);
            }
            if (obj.hasOwnProperty('unitOfPresentation')) {
                this.unitOfPresentation = new CodeableConcept(obj.unitOfPresentation);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('ingredient')) {
                this.ingredient = [];
                for (const o of obj.ingredient || []) {
                    this.ingredient.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('physicalCharacteristics')) {
                this.physicalCharacteristics = new ProdCharacteristic(obj.physicalCharacteristics);
            }
            if (obj.hasOwnProperty('otherCharacteristics')) {
                this.otherCharacteristics = [];
                for (const o of obj.otherCharacteristics || []) {
                    this.otherCharacteristics.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.MedicinalProductManufactured = MedicinalProductManufactured;
class MedicinalProductPackagedBatchIdentifierComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('outerPackaging')) {
                this.outerPackaging = new Identifier(obj.outerPackaging);
            }
            if (obj.hasOwnProperty('immediatePackaging')) {
                this.immediatePackaging = new Identifier(obj.immediatePackaging);
            }
        }
    }
}
exports.MedicinalProductPackagedBatchIdentifierComponent = MedicinalProductPackagedBatchIdentifierComponent;
class MedicinalProductPackagedPackageItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('material')) {
                this.material = [];
                for (const o of obj.material || []) {
                    this.material.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('alternateMaterial')) {
                this.alternateMaterial = [];
                for (const o of obj.alternateMaterial || []) {
                    this.alternateMaterial.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('device')) {
                this.device = [];
                for (const o of obj.device || []) {
                    this.device.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('manufacturedItem')) {
                this.manufacturedItem = [];
                for (const o of obj.manufacturedItem || []) {
                    this.manufacturedItem.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('packageItem')) {
                this.packageItem = [];
                for (const o of obj.packageItem || []) {
                    this.packageItem.push(new MedicinalProductPackagedPackageItemComponent(o));
                }
            }
            if (obj.hasOwnProperty('physicalCharacteristics')) {
                this.physicalCharacteristics = new ProdCharacteristic(obj.physicalCharacteristics);
            }
            if (obj.hasOwnProperty('otherCharacteristics')) {
                this.otherCharacteristics = [];
                for (const o of obj.otherCharacteristics || []) {
                    this.otherCharacteristics.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('shelfLifeStorage')) {
                this.shelfLifeStorage = [];
                for (const o of obj.shelfLifeStorage || []) {
                    this.shelfLifeStorage.push(new ProductShelfLife(o));
                }
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.MedicinalProductPackagedPackageItemComponent = MedicinalProductPackagedPackageItemComponent;
class MedicinalProductPackaged extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductPackaged';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('marketingStatus')) {
                this.marketingStatus = [];
                for (const o of obj.marketingStatus || []) {
                    this.marketingStatus.push(new MarketingStatus(o));
                }
            }
            if (obj.hasOwnProperty('marketingAuthorization')) {
                this.marketingAuthorization = new ResourceReference(obj.marketingAuthorization);
            }
            if (obj.hasOwnProperty('manufacturer')) {
                this.manufacturer = [];
                for (const o of obj.manufacturer || []) {
                    this.manufacturer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('batchIdentifier')) {
                this.batchIdentifier = [];
                for (const o of obj.batchIdentifier || []) {
                    this.batchIdentifier.push(new MedicinalProductPackagedBatchIdentifierComponent(o));
                }
            }
            if (obj.hasOwnProperty('packageItem')) {
                this.packageItem = [];
                for (const o of obj.packageItem || []) {
                    this.packageItem.push(new MedicinalProductPackagedPackageItemComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductPackaged = MedicinalProductPackaged;
class MedicinalProductPharmaceuticalCharacteristicsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
        }
    }
}
exports.MedicinalProductPharmaceuticalCharacteristicsComponent = MedicinalProductPharmaceuticalCharacteristicsComponent;
class MedicinalProductPharmaceuticalWithdrawalPeriodComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('tissue')) {
                this.tissue = new CodeableConcept(obj.tissue);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Quantity(obj.value);
            }
            if (obj.hasOwnProperty('supportingInformation')) {
                this.supportingInformation = obj.supportingInformation;
            }
        }
    }
}
exports.MedicinalProductPharmaceuticalWithdrawalPeriodComponent = MedicinalProductPharmaceuticalWithdrawalPeriodComponent;
class MedicinalProductPharmaceuticalTargetSpeciesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('withdrawalPeriod')) {
                this.withdrawalPeriod = [];
                for (const o of obj.withdrawalPeriod || []) {
                    this.withdrawalPeriod.push(new MedicinalProductPharmaceuticalWithdrawalPeriodComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductPharmaceuticalTargetSpeciesComponent = MedicinalProductPharmaceuticalTargetSpeciesComponent;
class MedicinalProductPharmaceuticalRouteOfAdministrationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('firstDose')) {
                this.firstDose = new Quantity(obj.firstDose);
            }
            if (obj.hasOwnProperty('maxSingleDose')) {
                this.maxSingleDose = new Quantity(obj.maxSingleDose);
            }
            if (obj.hasOwnProperty('maxDosePerDay')) {
                this.maxDosePerDay = new Quantity(obj.maxDosePerDay);
            }
            if (obj.hasOwnProperty('maxDosePerTreatmentPeriod')) {
                this.maxDosePerTreatmentPeriod = new Ratio(obj.maxDosePerTreatmentPeriod);
            }
            if (obj.hasOwnProperty('maxTreatmentPeriod')) {
                this.maxTreatmentPeriod = new Duration(obj.maxTreatmentPeriod);
            }
            if (obj.hasOwnProperty('targetSpecies')) {
                this.targetSpecies = [];
                for (const o of obj.targetSpecies || []) {
                    this.targetSpecies.push(new MedicinalProductPharmaceuticalTargetSpeciesComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductPharmaceuticalRouteOfAdministrationComponent = MedicinalProductPharmaceuticalRouteOfAdministrationComponent;
class MedicinalProductPharmaceutical extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductPharmaceutical';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('administrableDoseForm')) {
                this.administrableDoseForm = new CodeableConcept(obj.administrableDoseForm);
            }
            if (obj.hasOwnProperty('unitOfPresentation')) {
                this.unitOfPresentation = new CodeableConcept(obj.unitOfPresentation);
            }
            if (obj.hasOwnProperty('ingredient')) {
                this.ingredient = [];
                for (const o of obj.ingredient || []) {
                    this.ingredient.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('device')) {
                this.device = [];
                for (const o of obj.device || []) {
                    this.device.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('characteristics')) {
                this.characteristics = [];
                for (const o of obj.characteristics || []) {
                    this.characteristics.push(new MedicinalProductPharmaceuticalCharacteristicsComponent(o));
                }
            }
            if (obj.hasOwnProperty('routeOfAdministration')) {
                this.routeOfAdministration = [];
                for (const o of obj.routeOfAdministration || []) {
                    this.routeOfAdministration.push(new MedicinalProductPharmaceuticalRouteOfAdministrationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductPharmaceutical = MedicinalProductPharmaceutical;
class MedicinalProductUndesirableEffectPopulationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('age')) {
                this.age = new Element(obj.age);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = new CodeableConcept(obj.gender);
            }
            if (obj.hasOwnProperty('race')) {
                this.race = new CodeableConcept(obj.race);
            }
            if (obj.hasOwnProperty('physiologicalCondition')) {
                this.physiologicalCondition = new CodeableConcept(obj.physiologicalCondition);
            }
        }
    }
}
exports.MedicinalProductUndesirableEffectPopulationComponent = MedicinalProductUndesirableEffectPopulationComponent;
class MedicinalProductUndesirableEffect extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MedicinalProductUndesirableEffect';
        if (obj) {
            if (obj.hasOwnProperty('subject')) {
                this.subject = [];
                for (const o of obj.subject || []) {
                    this.subject.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('symptomConditionEffect')) {
                this.symptomConditionEffect = new CodeableConcept(obj.symptomConditionEffect);
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = new CodeableConcept(obj.classification);
            }
            if (obj.hasOwnProperty('frequencyOfOccurrence')) {
                this.frequencyOfOccurrence = new CodeableConcept(obj.frequencyOfOccurrence);
            }
            if (obj.hasOwnProperty('population')) {
                this.population = [];
                for (const o of obj.population || []) {
                    this.population.push(new MedicinalProductUndesirableEffectPopulationComponent(o));
                }
            }
        }
    }
}
exports.MedicinalProductUndesirableEffect = MedicinalProductUndesirableEffect;
class MessageDefinitionFocusComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = obj.profile;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
        }
    }
}
exports.MessageDefinitionFocusComponent = MessageDefinitionFocusComponent;
class MessageDefinitionAllowedResponseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('message')) {
                this.message = obj.message;
            }
            if (obj.hasOwnProperty('situation')) {
                this.situation = obj.situation;
            }
        }
    }
}
exports.MessageDefinitionAllowedResponseComponent = MessageDefinitionAllowedResponseComponent;
class MessageDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MessageDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = obj.replaces;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('base')) {
                this.base = obj.base;
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = obj.parent;
            }
            if (obj.hasOwnProperty('event')) {
                this.event = new Element(obj.event);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = obj.category;
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = [];
                for (const o of obj.focus || []) {
                    this.focus.push(new MessageDefinitionFocusComponent(o));
                }
            }
            if (obj.hasOwnProperty('responseRequired')) {
                this.responseRequired = obj.responseRequired;
            }
            if (obj.hasOwnProperty('allowedResponse')) {
                this.allowedResponse = [];
                for (const o of obj.allowedResponse || []) {
                    this.allowedResponse.push(new MessageDefinitionAllowedResponseComponent(o));
                }
            }
            if (obj.hasOwnProperty('graph')) {
                this.graph = obj.graph;
            }
        }
    }
}
exports.MessageDefinition = MessageDefinition;
class MessageHeaderMessageDestinationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = obj.endpoint;
            }
            if (obj.hasOwnProperty('receiver')) {
                this.receiver = new ResourceReference(obj.receiver);
            }
        }
    }
}
exports.MessageHeaderMessageDestinationComponent = MessageHeaderMessageDestinationComponent;
class MessageHeaderMessageSourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('software')) {
                this.software = obj.software;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = new ContactPoint(obj.contact);
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = obj.endpoint;
            }
        }
    }
}
exports.MessageHeaderMessageSourceComponent = MessageHeaderMessageSourceComponent;
class MessageHeaderResponseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = obj.identifier;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('details')) {
                this.details = new ResourceReference(obj.details);
            }
        }
    }
}
exports.MessageHeaderResponseComponent = MessageHeaderResponseComponent;
class MessageHeader extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'MessageHeader';
        if (obj) {
            if (obj.hasOwnProperty('event')) {
                this.event = new Element(obj.event);
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = [];
                for (const o of obj.destination || []) {
                    this.destination.push(new MessageHeaderMessageDestinationComponent(o));
                }
            }
            if (obj.hasOwnProperty('sender')) {
                this.sender = new ResourceReference(obj.sender);
            }
            if (obj.hasOwnProperty('enterer')) {
                this.enterer = new ResourceReference(obj.enterer);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new MessageHeaderMessageSourceComponent(obj.source);
            }
            if (obj.hasOwnProperty('responsible')) {
                this.responsible = new ResourceReference(obj.responsible);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new CodeableConcept(obj.reason);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new MessageHeaderResponseComponent(obj.response);
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = [];
                for (const o of obj.focus || []) {
                    this.focus.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
        }
    }
}
exports.MessageHeader = MessageHeader;
class MoneyQuantity extends Quantity {
    constructor(obj) {
        super(obj);
        if (obj) {
        }
    }
}
exports.MoneyQuantity = MoneyQuantity;
class NamingSystemUniqueIdComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('preferred')) {
                this.preferred = obj.preferred;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.NamingSystemUniqueIdComponent = NamingSystemUniqueIdComponent;
class NamingSystem extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'NamingSystem';
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('responsible')) {
                this.responsible = obj.responsible;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('uniqueId')) {
                this.uniqueId = [];
                for (const o of obj.uniqueId || []) {
                    this.uniqueId.push(new NamingSystemUniqueIdComponent(o));
                }
            }
        }
    }
}
exports.NamingSystem = NamingSystem;
class NutritionOrderNutrientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = new CodeableConcept(obj.modifier);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SimpleQuantity(obj.amount);
            }
        }
    }
}
exports.NutritionOrderNutrientComponent = NutritionOrderNutrientComponent;
class NutritionOrderTextureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = new CodeableConcept(obj.modifier);
            }
            if (obj.hasOwnProperty('foodType')) {
                this.foodType = new CodeableConcept(obj.foodType);
            }
        }
    }
}
exports.NutritionOrderTextureComponent = NutritionOrderTextureComponent;
class NutritionOrderOralDietComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = [];
                for (const o of obj.schedule || []) {
                    this.schedule.push(new Timing(o));
                }
            }
            if (obj.hasOwnProperty('nutrient')) {
                this.nutrient = [];
                for (const o of obj.nutrient || []) {
                    this.nutrient.push(new NutritionOrderNutrientComponent(o));
                }
            }
            if (obj.hasOwnProperty('texture')) {
                this.texture = [];
                for (const o of obj.texture || []) {
                    this.texture.push(new NutritionOrderTextureComponent(o));
                }
            }
            if (obj.hasOwnProperty('fluidConsistencyType')) {
                this.fluidConsistencyType = [];
                for (const o of obj.fluidConsistencyType || []) {
                    this.fluidConsistencyType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('instruction')) {
                this.instruction = obj.instruction;
            }
        }
    }
}
exports.NutritionOrderOralDietComponent = NutritionOrderOralDietComponent;
class NutritionOrderSupplementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('productName')) {
                this.productName = obj.productName;
            }
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = [];
                for (const o of obj.schedule || []) {
                    this.schedule.push(new Timing(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('instruction')) {
                this.instruction = obj.instruction;
            }
        }
    }
}
exports.NutritionOrderSupplementComponent = NutritionOrderSupplementComponent;
class NutritionOrderAdministrationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = new Timing(obj.schedule);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('rate')) {
                this.rate = new Element(obj.rate);
            }
        }
    }
}
exports.NutritionOrderAdministrationComponent = NutritionOrderAdministrationComponent;
class NutritionOrderEnteralFormulaComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('baseFormulaType')) {
                this.baseFormulaType = new CodeableConcept(obj.baseFormulaType);
            }
            if (obj.hasOwnProperty('baseFormulaProductName')) {
                this.baseFormulaProductName = obj.baseFormulaProductName;
            }
            if (obj.hasOwnProperty('additiveType')) {
                this.additiveType = new CodeableConcept(obj.additiveType);
            }
            if (obj.hasOwnProperty('additiveProductName')) {
                this.additiveProductName = obj.additiveProductName;
            }
            if (obj.hasOwnProperty('caloricDensity')) {
                this.caloricDensity = new SimpleQuantity(obj.caloricDensity);
            }
            if (obj.hasOwnProperty('routeofAdministration')) {
                this.routeofAdministration = new CodeableConcept(obj.routeofAdministration);
            }
            if (obj.hasOwnProperty('administration')) {
                this.administration = [];
                for (const o of obj.administration || []) {
                    this.administration.push(new NutritionOrderAdministrationComponent(o));
                }
            }
            if (obj.hasOwnProperty('maxVolumeToDeliver')) {
                this.maxVolumeToDeliver = new SimpleQuantity(obj.maxVolumeToDeliver);
            }
            if (obj.hasOwnProperty('administrationInstruction')) {
                this.administrationInstruction = obj.administrationInstruction;
            }
        }
    }
}
exports.NutritionOrderEnteralFormulaComponent = NutritionOrderEnteralFormulaComponent;
class NutritionOrder extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'NutritionOrder';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('instantiates')) {
                this.instantiates = obj.instantiates;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('dateTime')) {
                this.dateTime = new Date(obj.dateTime);
            }
            if (obj.hasOwnProperty('orderer')) {
                this.orderer = new ResourceReference(obj.orderer);
            }
            if (obj.hasOwnProperty('allergyIntolerance')) {
                this.allergyIntolerance = [];
                for (const o of obj.allergyIntolerance || []) {
                    this.allergyIntolerance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('foodPreferenceModifier')) {
                this.foodPreferenceModifier = [];
                for (const o of obj.foodPreferenceModifier || []) {
                    this.foodPreferenceModifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('excludeFoodModifier')) {
                this.excludeFoodModifier = [];
                for (const o of obj.excludeFoodModifier || []) {
                    this.excludeFoodModifier.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('oralDiet')) {
                this.oralDiet = new NutritionOrderOralDietComponent(obj.oralDiet);
            }
            if (obj.hasOwnProperty('supplement')) {
                this.supplement = [];
                for (const o of obj.supplement || []) {
                    this.supplement.push(new NutritionOrderSupplementComponent(o));
                }
            }
            if (obj.hasOwnProperty('enteralFormula')) {
                this.enteralFormula = new NutritionOrderEnteralFormulaComponent(obj.enteralFormula);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.NutritionOrder = NutritionOrder;
class ObservationDefinitionQuantitativeDetailsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('customaryUnit')) {
                this.customaryUnit = new Coding(obj.customaryUnit);
            }
            if (obj.hasOwnProperty('unit')) {
                this.unit = new Coding(obj.unit);
            }
            if (obj.hasOwnProperty('conversionFactor')) {
                this.conversionFactor = obj.conversionFactor;
            }
            if (obj.hasOwnProperty('decimalPrecision')) {
                this.decimalPrecision = obj.decimalPrecision;
            }
        }
    }
}
exports.ObservationDefinitionQuantitativeDetailsComponent = ObservationDefinitionQuantitativeDetailsComponent;
class ObservationDefinitionQualifiedIntervalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('range')) {
                this.range = new Range(obj.range);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('appliesTo')) {
                this.appliesTo = [];
                for (const o of obj.appliesTo || []) {
                    this.appliesTo.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('age')) {
                this.age = new Range(obj.age);
            }
            if (obj.hasOwnProperty('gestationalAge')) {
                this.gestationalAge = new Range(obj.gestationalAge);
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = obj.condition;
            }
        }
    }
}
exports.ObservationDefinitionQualifiedIntervalComponent = ObservationDefinitionQualifiedIntervalComponent;
class ObservationDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ObservationDefinition';
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new Coding(obj.category);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new Coding(obj.code);
            }
            if (obj.hasOwnProperty('permittedDataType')) {
                this.permittedDataType = [];
                for (const o of obj.permittedDataType || []) {
                    this.permittedDataType.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('multipleResultsAllowed')) {
                this.multipleResultsAllowed = obj.multipleResultsAllowed;
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('preferredReportName')) {
                this.preferredReportName = obj.preferredReportName;
            }
            if (obj.hasOwnProperty('quantitativeDetails')) {
                this.quantitativeDetails = new ObservationDefinitionQuantitativeDetailsComponent(obj.quantitativeDetails);
            }
            if (obj.hasOwnProperty('qualifiedInterval')) {
                this.qualifiedInterval = [];
                for (const o of obj.qualifiedInterval || []) {
                    this.qualifiedInterval.push(new ObservationDefinitionQualifiedIntervalComponent(o));
                }
            }
            if (obj.hasOwnProperty('validCodedValueSet')) {
                this.validCodedValueSet = obj.validCodedValueSet;
            }
            if (obj.hasOwnProperty('normalCodedValueSet')) {
                this.normalCodedValueSet = obj.normalCodedValueSet;
            }
            if (obj.hasOwnProperty('abnormalCodedValueSet')) {
                this.abnormalCodedValueSet = obj.abnormalCodedValueSet;
            }
            if (obj.hasOwnProperty('criticalCodedValueSet')) {
                this.criticalCodedValueSet = obj.criticalCodedValueSet;
            }
        }
    }
}
exports.ObservationDefinition = ObservationDefinition;
class OperationDefinitionBindingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('strength')) {
                this.strength = obj.strength;
            }
            if (obj.hasOwnProperty('valueSet')) {
                this.valueSet = obj.valueSet;
            }
        }
    }
}
exports.OperationDefinitionBindingComponent = OperationDefinitionBindingComponent;
class OperationDefinitionReferencedFromComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
            if (obj.hasOwnProperty('sourceId')) {
                this.sourceId = obj.sourceId;
            }
        }
    }
}
exports.OperationDefinitionReferencedFromComponent = OperationDefinitionReferencedFromComponent;
class OperationDefinitionParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('use')) {
                this.use = obj.use;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('targetProfile')) {
                this.targetProfile = obj.targetProfile;
            }
            if (obj.hasOwnProperty('searchType')) {
                this.searchType = obj.searchType;
            }
            if (obj.hasOwnProperty('binding')) {
                this.binding = new OperationDefinitionBindingComponent(obj.binding);
            }
            if (obj.hasOwnProperty('referencedFrom')) {
                this.referencedFrom = [];
                for (const o of obj.referencedFrom || []) {
                    this.referencedFrom.push(new OperationDefinitionReferencedFromComponent(o));
                }
            }
            if (obj.hasOwnProperty('part')) {
                this.part = [];
                for (const o of obj.part || []) {
                    this.part.push(new OperationDefinitionParameterComponent(o));
                }
            }
        }
    }
}
exports.OperationDefinitionParameterComponent = OperationDefinitionParameterComponent;
class OperationDefinitionOverloadComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('parameterName')) {
                this.parameterName = obj.parameterName;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.OperationDefinitionOverloadComponent = OperationDefinitionOverloadComponent;
class OperationDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'OperationDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('affectsState')) {
                this.affectsState = obj.affectsState;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('base')) {
                this.base = obj.base;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = obj.resource;
            }
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('instance')) {
                this.instance = obj.instance;
            }
            if (obj.hasOwnProperty('inputProfile')) {
                this.inputProfile = obj.inputProfile;
            }
            if (obj.hasOwnProperty('outputProfile')) {
                this.outputProfile = obj.outputProfile;
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new OperationDefinitionParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('overload')) {
                this.overload = [];
                for (const o of obj.overload || []) {
                    this.overload.push(new OperationDefinitionOverloadComponent(o));
                }
            }
        }
    }
}
exports.OperationDefinition = OperationDefinition;
class OperationOutcomeIssueComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('severity')) {
                this.severity = obj.severity;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('details')) {
                this.details = new CodeableConcept(obj.details);
            }
            if (obj.hasOwnProperty('diagnostics')) {
                this.diagnostics = obj.diagnostics;
            }
            if (obj.hasOwnProperty('location')) {
                this.location = obj.location;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.OperationOutcomeIssueComponent = OperationOutcomeIssueComponent;
class OperationOutcome extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'OperationOutcome';
        if (obj) {
            if (obj.hasOwnProperty('issue')) {
                this.issue = [];
                for (const o of obj.issue || []) {
                    this.issue.push(new OperationOutcomeIssueComponent(o));
                }
            }
        }
    }
}
exports.OperationOutcome = OperationOutcome;
class OrganizationContactComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = new CodeableConcept(obj.purpose);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = new HumanName(obj.name);
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = new Address(obj.address);
            }
        }
    }
}
exports.OrganizationContactComponent = OrganizationContactComponent;
class Organization extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Organization';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = [];
                for (const o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = new ResourceReference(obj.partOf);
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new OrganizationContactComponent(o));
                }
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.Organization = Organization;
class OrganizationAffiliation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'OrganizationAffiliation';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('participatingOrganization')) {
                this.participatingOrganization = new ResourceReference(obj.participatingOrganization);
            }
            if (obj.hasOwnProperty('network')) {
                this.network = [];
                for (const o of obj.network || []) {
                    this.network.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = [];
                for (const o of obj.location || []) {
                    this.location.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('healthcareService')) {
                this.healthcareService = [];
                for (const o of obj.healthcareService || []) {
                    this.healthcareService.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.OrganizationAffiliation = OrganizationAffiliation;
class PatientContactComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = [];
                for (const o of obj.relationship || []) {
                    this.relationship.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = new HumanName(obj.name);
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = new Address(obj.address);
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = obj.gender;
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.PatientContactComponent = PatientContactComponent;
class PatientCommunicationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('language')) {
                this.language = new CodeableConcept(obj.language);
            }
            if (obj.hasOwnProperty('preferred')) {
                this.preferred = obj.preferred;
            }
        }
    }
}
exports.PatientCommunicationComponent = PatientCommunicationComponent;
class PatientLinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('other')) {
                this.other = new ResourceReference(obj.other);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
        }
    }
}
exports.PatientLinkComponent = PatientLinkComponent;
class Patient extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Patient';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = [];
                for (const o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = obj.gender;
            }
            if (obj.hasOwnProperty('birthDate')) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.hasOwnProperty('deceased')) {
                this.deceased = new Element(obj.deceased);
            }
            if (obj.hasOwnProperty('address')) {
                this.address = [];
                for (const o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.hasOwnProperty('maritalStatus')) {
                this.maritalStatus = new CodeableConcept(obj.maritalStatus);
            }
            if (obj.hasOwnProperty('multipleBirth')) {
                this.multipleBirth = new Element(obj.multipleBirth);
            }
            if (obj.hasOwnProperty('photo')) {
                this.photo = [];
                for (const o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new PatientContactComponent(o));
                }
            }
            if (obj.hasOwnProperty('communication')) {
                this.communication = [];
                for (const o of obj.communication || []) {
                    this.communication.push(new PatientCommunicationComponent(o));
                }
            }
            if (obj.hasOwnProperty('generalPractitioner')) {
                this.generalPractitioner = [];
                for (const o of obj.generalPractitioner || []) {
                    this.generalPractitioner.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new PatientLinkComponent(o));
                }
            }
        }
    }
}
exports.Patient = Patient;
class PaymentNotice extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PaymentNotice';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.hasOwnProperty('statusDate')) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('paymentStatus')) {
                this.paymentStatus = new CodeableConcept(obj.paymentStatus);
            }
        }
    }
}
exports.PaymentNotice = PaymentNotice;
class PaymentReconciliationDetailsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.hasOwnProperty('submitter')) {
                this.submitter = new ResourceReference(obj.submitter);
            }
            if (obj.hasOwnProperty('payee')) {
                this.payee = new ResourceReference(obj.payee);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Money(obj.amount);
            }
        }
    }
}
exports.PaymentReconciliationDetailsComponent = PaymentReconciliationDetailsComponent;
class PaymentReconciliationNotesComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.PaymentReconciliationNotesComponent = PaymentReconciliationNotesComponent;
class PaymentReconciliation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PaymentReconciliation';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('requestProvider')) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = [];
                for (const o of obj.detail || []) {
                    this.detail.push(new PaymentReconciliationDetailsComponent(o));
                }
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('total')) {
                this.total = new Money(obj.total);
            }
            if (obj.hasOwnProperty('processNote')) {
                this.processNote = [];
                for (const o of obj.processNote || []) {
                    this.processNote.push(new PaymentReconciliationNotesComponent(o));
                }
            }
        }
    }
}
exports.PaymentReconciliation = PaymentReconciliation;
class PersonLinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('target')) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.hasOwnProperty('assurance')) {
                this.assurance = obj.assurance;
            }
        }
    }
}
exports.PersonLinkComponent = PersonLinkComponent;
class Person extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Person';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = [];
                for (const o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = obj.gender;
            }
            if (obj.hasOwnProperty('birthDate')) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.hasOwnProperty('address')) {
                this.address = [];
                for (const o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.hasOwnProperty('photo')) {
                this.photo = new Attachment(obj.photo);
            }
            if (obj.hasOwnProperty('managingOrganization')) {
                this.managingOrganization = new ResourceReference(obj.managingOrganization);
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new PersonLinkComponent(o));
                }
            }
        }
    }
}
exports.Person = Person;
class PlanDefinitionTargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('measure')) {
                this.measure = new CodeableConcept(obj.measure);
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = new Element(obj.detail);
            }
            if (obj.hasOwnProperty('due')) {
                this.due = new Duration(obj.due);
            }
        }
    }
}
exports.PlanDefinitionTargetComponent = PlanDefinitionTargetComponent;
class PlanDefinitionGoalComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = new CodeableConcept(obj.description);
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = new CodeableConcept(obj.priority);
            }
            if (obj.hasOwnProperty('start')) {
                this.start = new CodeableConcept(obj.start);
            }
            if (obj.hasOwnProperty('addresses')) {
                this.addresses = [];
                for (const o of obj.addresses || []) {
                    this.addresses.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = [];
                for (const o of obj.documentation || []) {
                    this.documentation.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new PlanDefinitionTargetComponent(o));
                }
            }
        }
    }
}
exports.PlanDefinitionGoalComponent = PlanDefinitionGoalComponent;
class PlanDefinitionConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = new Expression(obj.expression);
            }
        }
    }
}
exports.PlanDefinitionConditionComponent = PlanDefinitionConditionComponent;
class PlanDefinitionRelatedActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('actionId')) {
                this.actionId = obj.actionId;
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = obj.relationship;
            }
            if (obj.hasOwnProperty('offset')) {
                this.offset = new Element(obj.offset);
            }
        }
    }
}
exports.PlanDefinitionRelatedActionComponent = PlanDefinitionRelatedActionComponent;
class PlanDefinitionParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
        }
    }
}
exports.PlanDefinitionParticipantComponent = PlanDefinitionParticipantComponent;
class PlanDefinitionDynamicValueComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = new Expression(obj.expression);
            }
        }
    }
}
exports.PlanDefinitionDynamicValueComponent = PlanDefinitionDynamicValueComponent;
class PlanDefinitionActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('prefix')) {
                this.prefix = obj.prefix;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('textEquivalent')) {
                this.textEquivalent = obj.textEquivalent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = [];
                for (const o of obj.documentation || []) {
                    this.documentation.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('goalId')) {
                this.goalId = obj.goalId;
            }
            if (obj.hasOwnProperty('trigger')) {
                this.trigger = [];
                for (const o of obj.trigger || []) {
                    this.trigger.push(new TriggerDefinition(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = [];
                for (const o of obj.condition || []) {
                    this.condition.push(new PlanDefinitionConditionComponent(o));
                }
            }
            if (obj.hasOwnProperty('input')) {
                this.input = [];
                for (const o of obj.input || []) {
                    this.input.push(new DataRequirement(o));
                }
            }
            if (obj.hasOwnProperty('output')) {
                this.output = [];
                for (const o of obj.output || []) {
                    this.output.push(new DataRequirement(o));
                }
            }
            if (obj.hasOwnProperty('relatedAction')) {
                this.relatedAction = [];
                for (const o of obj.relatedAction || []) {
                    this.relatedAction.push(new PlanDefinitionRelatedActionComponent(o));
                }
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new PlanDefinitionParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('groupingBehavior')) {
                this.groupingBehavior = obj.groupingBehavior;
            }
            if (obj.hasOwnProperty('selectionBehavior')) {
                this.selectionBehavior = obj.selectionBehavior;
            }
            if (obj.hasOwnProperty('requiredBehavior')) {
                this.requiredBehavior = obj.requiredBehavior;
            }
            if (obj.hasOwnProperty('precheckBehavior')) {
                this.precheckBehavior = obj.precheckBehavior;
            }
            if (obj.hasOwnProperty('cardinalityBehavior')) {
                this.cardinalityBehavior = obj.cardinalityBehavior;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('transform')) {
                this.transform = obj.transform;
            }
            if (obj.hasOwnProperty('dynamicValue')) {
                this.dynamicValue = [];
                for (const o of obj.dynamicValue || []) {
                    this.dynamicValue.push(new PlanDefinitionDynamicValueComponent(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new PlanDefinitionActionComponent(o));
                }
            }
        }
    }
}
exports.PlanDefinitionActionComponent = PlanDefinitionActionComponent;
class PlanDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PlanDefinition';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('subtitle')) {
                this.subtitle = obj.subtitle;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new Element(obj.subject);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('usage')) {
                this.usage = obj.usage;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('topic')) {
                this.topic = [];
                for (const o of obj.topic || []) {
                    this.topic.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('author')) {
                this.author = [];
                for (const o of obj.author || []) {
                    this.author.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('editor')) {
                this.editor = [];
                for (const o of obj.editor || []) {
                    this.editor.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('reviewer')) {
                this.reviewer = [];
                for (const o of obj.reviewer || []) {
                    this.reviewer.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('endorser')) {
                this.endorser = [];
                for (const o of obj.endorser || []) {
                    this.endorser.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('library')) {
                this.library = obj.library;
            }
            if (obj.hasOwnProperty('goal')) {
                this.goal = [];
                for (const o of obj.goal || []) {
                    this.goal.push(new PlanDefinitionGoalComponent(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new PlanDefinitionActionComponent(o));
                }
            }
        }
    }
}
exports.PlanDefinition = PlanDefinition;
class PractitionerQualificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('issuer')) {
                this.issuer = new ResourceReference(obj.issuer);
            }
        }
    }
}
exports.PractitionerQualificationComponent = PractitionerQualificationComponent;
class Practitioner extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Practitioner';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = [];
                for (const o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('address')) {
                this.address = [];
                for (const o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = obj.gender;
            }
            if (obj.hasOwnProperty('birthDate')) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.hasOwnProperty('photo')) {
                this.photo = [];
                for (const o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.hasOwnProperty('qualification')) {
                this.qualification = [];
                for (const o of obj.qualification || []) {
                    this.qualification.push(new PractitionerQualificationComponent(o));
                }
            }
            if (obj.hasOwnProperty('communication')) {
                this.communication = [];
                for (const o of obj.communication || []) {
                    this.communication.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.Practitioner = Practitioner;
class PractitionerRoleAvailableTimeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('daysOfWeek')) {
                this.daysOfWeek = obj.daysOfWeek;
            }
            if (obj.hasOwnProperty('allDay')) {
                this.allDay = obj.allDay;
            }
            if (obj.hasOwnProperty('availableStartTime')) {
                this.availableStartTime = new Date(obj.availableStartTime);
            }
            if (obj.hasOwnProperty('availableEndTime')) {
                this.availableEndTime = new Date(obj.availableEndTime);
            }
        }
    }
}
exports.PractitionerRoleAvailableTimeComponent = PractitionerRoleAvailableTimeComponent;
class PractitionerRoleNotAvailableComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('during')) {
                this.during = new Period(obj.during);
            }
        }
    }
}
exports.PractitionerRoleNotAvailableComponent = PractitionerRoleNotAvailableComponent;
class PractitionerRole extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'PractitionerRole';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('practitioner')) {
                this.practitioner = new ResourceReference(obj.practitioner);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = [];
                for (const o of obj.location || []) {
                    this.location.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('healthcareService')) {
                this.healthcareService = [];
                for (const o of obj.healthcareService || []) {
                    this.healthcareService.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('availableTime')) {
                this.availableTime = [];
                for (const o of obj.availableTime || []) {
                    this.availableTime.push(new PractitionerRoleAvailableTimeComponent(o));
                }
            }
            if (obj.hasOwnProperty('notAvailable')) {
                this.notAvailable = [];
                for (const o of obj.notAvailable || []) {
                    this.notAvailable.push(new PractitionerRoleNotAvailableComponent(o));
                }
            }
            if (obj.hasOwnProperty('availabilityExceptions')) {
                this.availabilityExceptions = obj.availabilityExceptions;
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = [];
                for (const o of obj.endpoint || []) {
                    this.endpoint.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.PractitionerRole = PractitionerRole;
class ProcedurePerformerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('function')) {
                this.function = new CodeableConcept(obj.function);
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = new ResourceReference(obj.actor);
            }
            if (obj.hasOwnProperty('onBehalfOf')) {
                this.onBehalfOf = new ResourceReference(obj.onBehalfOf);
            }
        }
    }
}
exports.ProcedurePerformerComponent = ProcedurePerformerComponent;
class ProcedureFocalDeviceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = new CodeableConcept(obj.action);
            }
            if (obj.hasOwnProperty('manipulated')) {
                this.manipulated = new ResourceReference(obj.manipulated);
            }
        }
    }
}
exports.ProcedureFocalDeviceComponent = ProcedureFocalDeviceComponent;
class Procedure extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Procedure';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('performed')) {
                this.performed = new Element(obj.performed);
            }
            if (obj.hasOwnProperty('recorder')) {
                this.recorder = new ResourceReference(obj.recorder);
            }
            if (obj.hasOwnProperty('asserter')) {
                this.asserter = new ResourceReference(obj.asserter);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ProcedurePerformerComponent(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = [];
                for (const o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.hasOwnProperty('report')) {
                this.report = [];
                for (const o of obj.report || []) {
                    this.report.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('complication')) {
                this.complication = [];
                for (const o of obj.complication || []) {
                    this.complication.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('complicationDetail')) {
                this.complicationDetail = [];
                for (const o of obj.complicationDetail || []) {
                    this.complicationDetail.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('followUp')) {
                this.followUp = [];
                for (const o of obj.followUp || []) {
                    this.followUp.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('focalDevice')) {
                this.focalDevice = [];
                for (const o of obj.focalDevice || []) {
                    this.focalDevice.push(new ProcedureFocalDeviceComponent(o));
                }
            }
            if (obj.hasOwnProperty('usedReference')) {
                this.usedReference = [];
                for (const o of obj.usedReference || []) {
                    this.usedReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('usedCode')) {
                this.usedCode = [];
                for (const o of obj.usedCode || []) {
                    this.usedCode.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.Procedure = Procedure;
class ServiceRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ServiceRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = [];
                for (const o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('requisition')) {
                this.requisition = new Identifier(obj.requisition);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('doNotPerform')) {
                this.doNotPerform = obj.doNotPerform;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('orderDetail')) {
                this.orderDetail = [];
                for (const o of obj.orderDetail || []) {
                    this.orderDetail.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Element(obj.quantity);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('asNeeded')) {
                this.asNeeded = new Element(obj.asNeeded);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('performerType')) {
                this.performerType = new CodeableConcept(obj.performerType);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = [];
                for (const o of obj.performer || []) {
                    this.performer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('locationCode')) {
                this.locationCode = [];
                for (const o of obj.locationCode || []) {
                    this.locationCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('locationReference')) {
                this.locationReference = [];
                for (const o of obj.locationReference || []) {
                    this.locationReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('supportingInfo')) {
                this.supportingInfo = [];
                for (const o of obj.supportingInfo || []) {
                    this.supportingInfo.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('specimen')) {
                this.specimen = [];
                for (const o of obj.specimen || []) {
                    this.specimen.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = [];
                for (const o of obj.bodySite || []) {
                    this.bodySite.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('patientInstruction')) {
                this.patientInstruction = obj.patientInstruction;
            }
            if (obj.hasOwnProperty('relevantHistory')) {
                this.relevantHistory = [];
                for (const o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ServiceRequest = ServiceRequest;
class ProcedureRequest extends ServiceRequest {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcedureRequest';
        if (obj) {
        }
    }
}
exports.ProcedureRequest = ProcedureRequest;
class ProcessRequestItemsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('sequenceLinkId')) {
                this.sequenceLinkId = obj.sequenceLinkId;
            }
        }
    }
}
exports.ProcessRequestItemsComponent = ProcessRequestItemsComponent;
class ProcessRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcessRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('action')) {
                this.action = obj.action;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = new ResourceReference(obj.target);
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('provider')) {
                this.provider = new ResourceReference(obj.provider);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('response')) {
                this.response = new ResourceReference(obj.response);
            }
            if (obj.hasOwnProperty('nullify')) {
                this.nullify = obj.nullify;
            }
            if (obj.hasOwnProperty('reference')) {
                this.reference = obj.reference;
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new ProcessRequestItemsComponent(o));
                }
            }
            if (obj.hasOwnProperty('include')) {
                this.include = obj.include;
            }
            if (obj.hasOwnProperty('exclude')) {
                this.exclude = obj.exclude;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.ProcessRequest = ProcessRequest;
class ProcessResponseProcessNoteComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
        }
    }
}
exports.ProcessResponseProcessNoteComponent = ProcessResponseProcessNoteComponent;
class ProcessResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ProcessResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('request')) {
                this.request = new ResourceReference(obj.request);
            }
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = obj.outcome;
            }
            if (obj.hasOwnProperty('disposition')) {
                this.disposition = obj.disposition;
            }
            if (obj.hasOwnProperty('requestProvider')) {
                this.requestProvider = new ResourceReference(obj.requestProvider);
            }
            if (obj.hasOwnProperty('form')) {
                this.form = new CodeableConcept(obj.form);
            }
            if (obj.hasOwnProperty('processNote')) {
                this.processNote = [];
                for (const o of obj.processNote || []) {
                    this.processNote.push(new ProcessResponseProcessNoteComponent(o));
                }
            }
            if (obj.hasOwnProperty('error')) {
                this.error = [];
                for (const o of obj.error || []) {
                    this.error.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('communicationRequest')) {
                this.communicationRequest = [];
                for (const o of obj.communicationRequest || []) {
                    this.communicationRequest.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.ProcessResponse = ProcessResponse;
class ProvenanceAgentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('role')) {
                this.role = [];
                for (const o of obj.role || []) {
                    this.role.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('who')) {
                this.who = new ResourceReference(obj.who);
            }
            if (obj.hasOwnProperty('onBehalfOf')) {
                this.onBehalfOf = new ResourceReference(obj.onBehalfOf);
            }
        }
    }
}
exports.ProvenanceAgentComponent = ProvenanceAgentComponent;
class ProvenanceEntityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = obj.role;
            }
            if (obj.hasOwnProperty('what')) {
                this.what = new ResourceReference(obj.what);
            }
            if (obj.hasOwnProperty('agent')) {
                this.agent = [];
                for (const o of obj.agent || []) {
                    this.agent.push(new ProvenanceAgentComponent(o));
                }
            }
        }
    }
}
exports.ProvenanceEntityComponent = ProvenanceEntityComponent;
class Provenance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Provenance';
        if (obj) {
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('occurred')) {
                this.occurred = new Element(obj.occurred);
            }
            if (obj.hasOwnProperty('recorded')) {
                this.recorded = new Date(obj.recorded);
            }
            if (obj.hasOwnProperty('policy')) {
                this.policy = obj.policy;
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = [];
                for (const o of obj.reason || []) {
                    this.reason.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('activity')) {
                this.activity = new CodeableConcept(obj.activity);
            }
            if (obj.hasOwnProperty('agent')) {
                this.agent = [];
                for (const o of obj.agent || []) {
                    this.agent.push(new ProvenanceAgentComponent(o));
                }
            }
            if (obj.hasOwnProperty('entity')) {
                this.entity = [];
                for (const o of obj.entity || []) {
                    this.entity.push(new ProvenanceEntityComponent(o));
                }
            }
            if (obj.hasOwnProperty('signature')) {
                this.signature = [];
                for (const o of obj.signature || []) {
                    this.signature.push(new Signature(o));
                }
            }
        }
    }
}
exports.Provenance = Provenance;
class QuestionnaireEnableWhenComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('question')) {
                this.question = obj.question;
            }
            if (obj.hasOwnProperty('operator')) {
                this.operator = obj.operator;
            }
            if (obj.hasOwnProperty('answer')) {
                this.answer = new Element(obj.answer);
            }
        }
    }
}
exports.QuestionnaireEnableWhenComponent = QuestionnaireEnableWhenComponent;
class QuestionnaireAnswerOptionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('initialSelected')) {
                this.initialSelected = obj.initialSelected;
            }
        }
    }
}
exports.QuestionnaireAnswerOptionComponent = QuestionnaireAnswerOptionComponent;
class QuestionnaireInitialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.QuestionnaireInitialComponent = QuestionnaireInitialComponent;
class QuestionnaireItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('prefix')) {
                this.prefix = obj.prefix;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('enableWhen')) {
                this.enableWhen = [];
                for (const o of obj.enableWhen || []) {
                    this.enableWhen.push(new QuestionnaireEnableWhenComponent(o));
                }
            }
            if (obj.hasOwnProperty('enableBehavior')) {
                this.enableBehavior = obj.enableBehavior;
            }
            if (obj.hasOwnProperty('required')) {
                this.required = obj.required;
            }
            if (obj.hasOwnProperty('repeats')) {
                this.repeats = obj.repeats;
            }
            if (obj.hasOwnProperty('readOnly')) {
                this.readOnly = obj.readOnly;
            }
            if (obj.hasOwnProperty('maxLength')) {
                this.maxLength = obj.maxLength;
            }
            if (obj.hasOwnProperty('answerValueSet')) {
                this.answerValueSet = obj.answerValueSet;
            }
            if (obj.hasOwnProperty('answerOption')) {
                this.answerOption = [];
                for (const o of obj.answerOption || []) {
                    this.answerOption.push(new QuestionnaireAnswerOptionComponent(o));
                }
            }
            if (obj.hasOwnProperty('initial')) {
                this.initial = [];
                for (const o of obj.initial || []) {
                    this.initial.push(new QuestionnaireInitialComponent(o));
                }
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new QuestionnaireItemComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireItemComponent = QuestionnaireItemComponent;
class Questionnaire extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Questionnaire';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('derivedFrom')) {
                this.derivedFrom = obj.derivedFrom;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('subjectType')) {
                this.subjectType = obj.subjectType;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('approvalDate')) {
                this.approvalDate = new Date(obj.approvalDate);
            }
            if (obj.hasOwnProperty('lastReviewDate')) {
                this.lastReviewDate = new Date(obj.lastReviewDate);
            }
            if (obj.hasOwnProperty('effectivePeriod')) {
                this.effectivePeriod = new Period(obj.effectivePeriod);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new Coding(o));
                }
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new QuestionnaireItemComponent(o));
                }
            }
        }
    }
}
exports.Questionnaire = Questionnaire;
class QuestionnaireResponseAnswerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new QuestionnaireResponseItemComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireResponseAnswerComponent = QuestionnaireResponseAnswerComponent;
class QuestionnaireResponseItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('linkId')) {
                this.linkId = obj.linkId;
            }
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('text')) {
                this.text = obj.text;
            }
            if (obj.hasOwnProperty('answer')) {
                this.answer = [];
                for (const o of obj.answer || []) {
                    this.answer.push(new QuestionnaireResponseAnswerComponent(o));
                }
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new QuestionnaireResponseItemComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireResponseItemComponent = QuestionnaireResponseItemComponent;
class QuestionnaireResponse extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'QuestionnaireResponse';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('questionnaire')) {
                this.questionnaire = obj.questionnaire;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('authored')) {
                this.authored = new Date(obj.authored);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = [];
                for (const o of obj.item || []) {
                    this.item.push(new QuestionnaireResponseItemComponent(o));
                }
            }
        }
    }
}
exports.QuestionnaireResponse = QuestionnaireResponse;
class ReferralRequest extends ServiceRequest {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ReferralRequest';
        if (obj) {
        }
    }
}
exports.ReferralRequest = ReferralRequest;
class RelatedPerson extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RelatedPerson';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = [];
                for (const o of obj.relationship || []) {
                    this.relationship.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('name')) {
                this.name = [];
                for (const o of obj.name || []) {
                    this.name.push(new HumanName(o));
                }
            }
            if (obj.hasOwnProperty('telecom')) {
                this.telecom = [];
                for (const o of obj.telecom || []) {
                    this.telecom.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('gender')) {
                this.gender = obj.gender;
            }
            if (obj.hasOwnProperty('birthDate')) {
                this.birthDate = new Date(obj.birthDate);
            }
            if (obj.hasOwnProperty('address')) {
                this.address = [];
                for (const o of obj.address || []) {
                    this.address.push(new Address(o));
                }
            }
            if (obj.hasOwnProperty('photo')) {
                this.photo = [];
                for (const o of obj.photo || []) {
                    this.photo.push(new Attachment(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
        }
    }
}
exports.RelatedPerson = RelatedPerson;
class RequestGroupConditionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.RequestGroupConditionComponent = RequestGroupConditionComponent;
class RequestGroupRelatedActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('actionId')) {
                this.actionId = obj.actionId;
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = obj.relationship;
            }
            if (obj.hasOwnProperty('offset')) {
                this.offset = new Element(obj.offset);
            }
        }
    }
}
exports.RequestGroupRelatedActionComponent = RequestGroupRelatedActionComponent;
class RequestGroupActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('prefix')) {
                this.prefix = obj.prefix;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('textEquivalent')) {
                this.textEquivalent = obj.textEquivalent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = [];
                for (const o of obj.code || []) {
                    this.code.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = [];
                for (const o of obj.documentation || []) {
                    this.documentation.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = [];
                for (const o of obj.condition || []) {
                    this.condition.push(new RequestGroupConditionComponent(o));
                }
            }
            if (obj.hasOwnProperty('relatedAction')) {
                this.relatedAction = [];
                for (const o of obj.relatedAction || []) {
                    this.relatedAction.push(new RequestGroupRelatedActionComponent(o));
                }
            }
            if (obj.hasOwnProperty('timing')) {
                this.timing = new Element(obj.timing);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('groupingBehavior')) {
                this.groupingBehavior = obj.groupingBehavior;
            }
            if (obj.hasOwnProperty('selectionBehavior')) {
                this.selectionBehavior = obj.selectionBehavior;
            }
            if (obj.hasOwnProperty('requiredBehavior')) {
                this.requiredBehavior = obj.requiredBehavior;
            }
            if (obj.hasOwnProperty('precheckBehavior')) {
                this.precheckBehavior = obj.precheckBehavior;
            }
            if (obj.hasOwnProperty('cardinalityBehavior')) {
                this.cardinalityBehavior = obj.cardinalityBehavior;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new ResourceReference(obj.resource);
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new RequestGroupActionComponent(o));
                }
            }
        }
    }
}
exports.RequestGroupActionComponent = RequestGroupActionComponent;
class RequestGroup extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RequestGroup';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('replaces')) {
                this.replaces = [];
                for (const o of obj.replaces || []) {
                    this.replaces.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('groupIdentifier')) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('author')) {
                this.author = new ResourceReference(obj.author);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new RequestGroupActionComponent(o));
                }
            }
        }
    }
}
exports.RequestGroup = RequestGroup;
class ResearchStudyArmComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.ResearchStudyArmComponent = ResearchStudyArmComponent;
class ResearchStudyObjectiveComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
        }
    }
}
exports.ResearchStudyObjectiveComponent = ResearchStudyObjectiveComponent;
class ResearchStudy extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ResearchStudy';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('protocol')) {
                this.protocol = [];
                for (const o of obj.protocol || []) {
                    this.protocol.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('primaryPurposeType')) {
                this.primaryPurposeType = new CodeableConcept(obj.primaryPurposeType);
            }
            if (obj.hasOwnProperty('phase')) {
                this.phase = new CodeableConcept(obj.phase);
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = [];
                for (const o of obj.focus || []) {
                    this.focus.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = [];
                for (const o of obj.condition || []) {
                    this.condition.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('relatedArtifact')) {
                this.relatedArtifact = [];
                for (const o of obj.relatedArtifact || []) {
                    this.relatedArtifact.push(new RelatedArtifact(o));
                }
            }
            if (obj.hasOwnProperty('keyword')) {
                this.keyword = [];
                for (const o of obj.keyword || []) {
                    this.keyword.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('location')) {
                this.location = [];
                for (const o of obj.location || []) {
                    this.location.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('enrollment')) {
                this.enrollment = [];
                for (const o of obj.enrollment || []) {
                    this.enrollment.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('sponsor')) {
                this.sponsor = new ResourceReference(obj.sponsor);
            }
            if (obj.hasOwnProperty('principalInvestigator')) {
                this.principalInvestigator = new ResourceReference(obj.principalInvestigator);
            }
            if (obj.hasOwnProperty('site')) {
                this.site = [];
                for (const o of obj.site || []) {
                    this.site.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('reasonStopped')) {
                this.reasonStopped = new CodeableConcept(obj.reasonStopped);
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('arm')) {
                this.arm = [];
                for (const o of obj.arm || []) {
                    this.arm.push(new ResearchStudyArmComponent(o));
                }
            }
            if (obj.hasOwnProperty('objective')) {
                this.objective = [];
                for (const o of obj.objective || []) {
                    this.objective.push(new ResearchStudyObjectiveComponent(o));
                }
            }
        }
    }
}
exports.ResearchStudy = ResearchStudy;
class ResearchSubject extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ResearchSubject';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('study')) {
                this.study = new ResourceReference(obj.study);
            }
            if (obj.hasOwnProperty('individual')) {
                this.individual = new ResourceReference(obj.individual);
            }
            if (obj.hasOwnProperty('assignedArm')) {
                this.assignedArm = obj.assignedArm;
            }
            if (obj.hasOwnProperty('actualArm')) {
                this.actualArm = obj.actualArm;
            }
            if (obj.hasOwnProperty('consent')) {
                this.consent = new ResourceReference(obj.consent);
            }
        }
    }
}
exports.ResearchSubject = ResearchSubject;
class RiskAssessmentPredictionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('outcome')) {
                this.outcome = new CodeableConcept(obj.outcome);
            }
            if (obj.hasOwnProperty('probability')) {
                this.probability = new Element(obj.probability);
            }
            if (obj.hasOwnProperty('qualitativeRisk')) {
                this.qualitativeRisk = new CodeableConcept(obj.qualitativeRisk);
            }
            if (obj.hasOwnProperty('relativeRisk')) {
                this.relativeRisk = obj.relativeRisk;
            }
            if (obj.hasOwnProperty('when')) {
                this.when = new Element(obj.when);
            }
            if (obj.hasOwnProperty('rationale')) {
                this.rationale = obj.rationale;
            }
        }
    }
}
exports.RiskAssessmentPredictionComponent = RiskAssessmentPredictionComponent;
class RiskAssessment extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'RiskAssessment';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = new ResourceReference(obj.basedOn);
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = new ResourceReference(obj.parent);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = new ResourceReference(obj.condition);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('basis')) {
                this.basis = [];
                for (const o of obj.basis || []) {
                    this.basis.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('prediction')) {
                this.prediction = [];
                for (const o of obj.prediction || []) {
                    this.prediction.push(new RiskAssessmentPredictionComponent(o));
                }
            }
            if (obj.hasOwnProperty('mitigation')) {
                this.mitigation = obj.mitigation;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.RiskAssessment = RiskAssessment;
class SampledData extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('origin')) {
                this.origin = new Quantity(obj.origin);
            }
            if (obj.hasOwnProperty('period')) {
                this.period = obj.period;
            }
            if (obj.hasOwnProperty('factor')) {
                this.factor = obj.factor;
            }
            if (obj.hasOwnProperty('lowerLimit')) {
                this.lowerLimit = obj.lowerLimit;
            }
            if (obj.hasOwnProperty('upperLimit')) {
                this.upperLimit = obj.upperLimit;
            }
            if (obj.hasOwnProperty('dimensions')) {
                this.dimensions = obj.dimensions;
            }
            if (obj.hasOwnProperty('data')) {
                this.data = obj.data;
            }
        }
    }
}
exports.SampledData = SampledData;
class Schedule extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Schedule';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('active')) {
                this.active = obj.active;
            }
            if (obj.hasOwnProperty('serviceCategory')) {
                this.serviceCategory = [];
                for (const o of obj.serviceCategory || []) {
                    this.serviceCategory.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviceType')) {
                this.serviceType = [];
                for (const o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('actor')) {
                this.actor = [];
                for (const o of obj.actor || []) {
                    this.actor.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('planningHorizon')) {
                this.planningHorizon = new Period(obj.planningHorizon);
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.Schedule = Schedule;
class SearchParameterComponentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('definition')) {
                this.definition = obj.definition;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
        }
    }
}
exports.SearchParameterComponentComponent = SearchParameterComponentComponent;
class SearchParameter extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SearchParameter';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('derivedFrom')) {
                this.derivedFrom = obj.derivedFrom;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('base')) {
                this.base = obj.base;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('xpath')) {
                this.xpath = obj.xpath;
            }
            if (obj.hasOwnProperty('xpathUsage')) {
                this.xpathUsage = obj.xpathUsage;
            }
            if (obj.hasOwnProperty('target')) {
                this.target = obj.target;
            }
            if (obj.hasOwnProperty('multipleOr')) {
                this.multipleOr = obj.multipleOr;
            }
            if (obj.hasOwnProperty('multipleAnd')) {
                this.multipleAnd = obj.multipleAnd;
            }
            if (obj.hasOwnProperty('comparator')) {
                this.comparator = obj.comparator;
            }
            if (obj.hasOwnProperty('modifier')) {
                this.modifier = obj.modifier;
            }
            if (obj.hasOwnProperty('chain')) {
                this.chain = obj.chain;
            }
            if (obj.hasOwnProperty('component')) {
                this.component = [];
                for (const o of obj.component || []) {
                    this.component.push(new SearchParameterComponentComponent(o));
                }
            }
        }
    }
}
exports.SearchParameter = SearchParameter;
class SequenceReferenceSeqComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('chromosome')) {
                this.chromosome = new CodeableConcept(obj.chromosome);
            }
            if (obj.hasOwnProperty('genomeBuild')) {
                this.genomeBuild = obj.genomeBuild;
            }
            if (obj.hasOwnProperty('orientation')) {
                this.orientation = obj.orientation;
            }
            if (obj.hasOwnProperty('referenceSeqId')) {
                this.referenceSeqId = new CodeableConcept(obj.referenceSeqId);
            }
            if (obj.hasOwnProperty('referenceSeqPointer')) {
                this.referenceSeqPointer = new ResourceReference(obj.referenceSeqPointer);
            }
            if (obj.hasOwnProperty('referenceSeqString')) {
                this.referenceSeqString = obj.referenceSeqString;
            }
            if (obj.hasOwnProperty('strand')) {
                this.strand = obj.strand;
            }
            if (obj.hasOwnProperty('windowStart')) {
                this.windowStart = obj.windowStart;
            }
            if (obj.hasOwnProperty('windowEnd')) {
                this.windowEnd = obj.windowEnd;
            }
        }
    }
}
exports.SequenceReferenceSeqComponent = SequenceReferenceSeqComponent;
class SequenceVariantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('start')) {
                this.start = obj.start;
            }
            if (obj.hasOwnProperty('end')) {
                this.end = obj.end;
            }
            if (obj.hasOwnProperty('observedAllele')) {
                this.observedAllele = obj.observedAllele;
            }
            if (obj.hasOwnProperty('referenceAllele')) {
                this.referenceAllele = obj.referenceAllele;
            }
            if (obj.hasOwnProperty('cigar')) {
                this.cigar = obj.cigar;
            }
            if (obj.hasOwnProperty('variantPointer')) {
                this.variantPointer = new ResourceReference(obj.variantPointer);
            }
        }
    }
}
exports.SequenceVariantComponent = SequenceVariantComponent;
class SequenceRocComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('score')) {
                this.score = obj.score;
            }
            if (obj.hasOwnProperty('numTP')) {
                this.numTP = obj.numTP;
            }
            if (obj.hasOwnProperty('numFP')) {
                this.numFP = obj.numFP;
            }
            if (obj.hasOwnProperty('numFN')) {
                this.numFN = obj.numFN;
            }
            if (obj.hasOwnProperty('precision')) {
                this.precision = obj.precision;
            }
            if (obj.hasOwnProperty('sensitivity')) {
                this.sensitivity = obj.sensitivity;
            }
            if (obj.hasOwnProperty('fMeasure')) {
                this.fMeasure = obj.fMeasure;
            }
        }
    }
}
exports.SequenceRocComponent = SequenceRocComponent;
class SequenceQualityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('standardSequence')) {
                this.standardSequence = new CodeableConcept(obj.standardSequence);
            }
            if (obj.hasOwnProperty('start')) {
                this.start = obj.start;
            }
            if (obj.hasOwnProperty('end')) {
                this.end = obj.end;
            }
            if (obj.hasOwnProperty('score')) {
                this.score = new Quantity(obj.score);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('truthTP')) {
                this.truthTP = obj.truthTP;
            }
            if (obj.hasOwnProperty('queryTP')) {
                this.queryTP = obj.queryTP;
            }
            if (obj.hasOwnProperty('truthFN')) {
                this.truthFN = obj.truthFN;
            }
            if (obj.hasOwnProperty('queryFP')) {
                this.queryFP = obj.queryFP;
            }
            if (obj.hasOwnProperty('gtFP')) {
                this.gtFP = obj.gtFP;
            }
            if (obj.hasOwnProperty('precision')) {
                this.precision = obj.precision;
            }
            if (obj.hasOwnProperty('recall')) {
                this.recall = obj.recall;
            }
            if (obj.hasOwnProperty('fScore')) {
                this.fScore = obj.fScore;
            }
            if (obj.hasOwnProperty('roc')) {
                this.roc = new SequenceRocComponent(obj.roc);
            }
        }
    }
}
exports.SequenceQualityComponent = SequenceQualityComponent;
class SequenceRepositoryComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('datasetId')) {
                this.datasetId = obj.datasetId;
            }
            if (obj.hasOwnProperty('variantsetId')) {
                this.variantsetId = obj.variantsetId;
            }
            if (obj.hasOwnProperty('readsetId')) {
                this.readsetId = obj.readsetId;
            }
        }
    }
}
exports.SequenceRepositoryComponent = SequenceRepositoryComponent;
class SequenceOuterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('start')) {
                this.start = obj.start;
            }
            if (obj.hasOwnProperty('end')) {
                this.end = obj.end;
            }
        }
    }
}
exports.SequenceOuterComponent = SequenceOuterComponent;
class SequenceInnerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('start')) {
                this.start = obj.start;
            }
            if (obj.hasOwnProperty('end')) {
                this.end = obj.end;
            }
        }
    }
}
exports.SequenceInnerComponent = SequenceInnerComponent;
class SequenceStructureVariantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('precision')) {
                this.precision = obj.precision;
            }
            if (obj.hasOwnProperty('reportedaCGHRatio')) {
                this.reportedaCGHRatio = obj.reportedaCGHRatio;
            }
            if (obj.hasOwnProperty('length')) {
                this.length = obj.length;
            }
            if (obj.hasOwnProperty('outer')) {
                this.outer = new SequenceOuterComponent(obj.outer);
            }
            if (obj.hasOwnProperty('inner')) {
                this.inner = new SequenceInnerComponent(obj.inner);
            }
        }
    }
}
exports.SequenceStructureVariantComponent = SequenceStructureVariantComponent;
class Sequence extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Sequence';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('coordinateSystem')) {
                this.coordinateSystem = obj.coordinateSystem;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('specimen')) {
                this.specimen = new ResourceReference(obj.specimen);
            }
            if (obj.hasOwnProperty('device')) {
                this.device = new ResourceReference(obj.device);
            }
            if (obj.hasOwnProperty('performer')) {
                this.performer = new ResourceReference(obj.performer);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('referenceSeq')) {
                this.referenceSeq = new SequenceReferenceSeqComponent(obj.referenceSeq);
            }
            if (obj.hasOwnProperty('variant')) {
                this.variant = [];
                for (const o of obj.variant || []) {
                    this.variant.push(new SequenceVariantComponent(o));
                }
            }
            if (obj.hasOwnProperty('observedSeq')) {
                this.observedSeq = obj.observedSeq;
            }
            if (obj.hasOwnProperty('quality')) {
                this.quality = [];
                for (const o of obj.quality || []) {
                    this.quality.push(new SequenceQualityComponent(o));
                }
            }
            if (obj.hasOwnProperty('readCoverage')) {
                this.readCoverage = obj.readCoverage;
            }
            if (obj.hasOwnProperty('repository')) {
                this.repository = [];
                for (const o of obj.repository || []) {
                    this.repository.push(new SequenceRepositoryComponent(o));
                }
            }
            if (obj.hasOwnProperty('pointer')) {
                this.pointer = [];
                for (const o of obj.pointer || []) {
                    this.pointer.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('structureVariant')) {
                this.structureVariant = [];
                for (const o of obj.structureVariant || []) {
                    this.structureVariant.push(new SequenceStructureVariantComponent(o));
                }
            }
        }
    }
}
exports.Sequence = Sequence;
class Slot extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Slot';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('serviceCategory')) {
                this.serviceCategory = [];
                for (const o of obj.serviceCategory || []) {
                    this.serviceCategory.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('serviceType')) {
                this.serviceType = [];
                for (const o of obj.serviceType || []) {
                    this.serviceType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specialty')) {
                this.specialty = [];
                for (const o of obj.specialty || []) {
                    this.specialty.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('appointmentType')) {
                this.appointmentType = new CodeableConcept(obj.appointmentType);
            }
            if (obj.hasOwnProperty('schedule')) {
                this.schedule = new ResourceReference(obj.schedule);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('start')) {
                this.start = new Date(obj.start);
            }
            if (obj.hasOwnProperty('end')) {
                this.end = new Date(obj.end);
            }
            if (obj.hasOwnProperty('overbooked')) {
                this.overbooked = obj.overbooked;
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
        }
    }
}
exports.Slot = Slot;
class SpecimenCollectionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('collector')) {
                this.collector = new ResourceReference(obj.collector);
            }
            if (obj.hasOwnProperty('collected')) {
                this.collected = new Element(obj.collected);
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new Duration(obj.duration);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('bodySite')) {
                this.bodySite = new CodeableConcept(obj.bodySite);
            }
            if (obj.hasOwnProperty('fastingStatus')) {
                this.fastingStatus = new Element(obj.fastingStatus);
            }
        }
    }
}
exports.SpecimenCollectionComponent = SpecimenCollectionComponent;
class SpecimenProcessingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('procedure')) {
                this.procedure = new CodeableConcept(obj.procedure);
            }
            if (obj.hasOwnProperty('additive')) {
                this.additive = [];
                for (const o of obj.additive || []) {
                    this.additive.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('time')) {
                this.time = new Element(obj.time);
            }
        }
    }
}
exports.SpecimenProcessingComponent = SpecimenProcessingComponent;
class SpecimenContainerComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('capacity')) {
                this.capacity = new SimpleQuantity(obj.capacity);
            }
            if (obj.hasOwnProperty('specimenQuantity')) {
                this.specimenQuantity = new SimpleQuantity(obj.specimenQuantity);
            }
            if (obj.hasOwnProperty('additive')) {
                this.additive = new Element(obj.additive);
            }
        }
    }
}
exports.SpecimenContainerComponent = SpecimenContainerComponent;
class Specimen extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Specimen';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('accessionIdentifier')) {
                this.accessionIdentifier = new Identifier(obj.accessionIdentifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('subject')) {
                this.subject = new ResourceReference(obj.subject);
            }
            if (obj.hasOwnProperty('receivedTime')) {
                this.receivedTime = new Date(obj.receivedTime);
            }
            if (obj.hasOwnProperty('parent')) {
                this.parent = [];
                for (const o of obj.parent || []) {
                    this.parent.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('request')) {
                this.request = [];
                for (const o of obj.request || []) {
                    this.request.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('collection')) {
                this.collection = new SpecimenCollectionComponent(obj.collection);
            }
            if (obj.hasOwnProperty('processing')) {
                this.processing = [];
                for (const o of obj.processing || []) {
                    this.processing.push(new SpecimenProcessingComponent(o));
                }
            }
            if (obj.hasOwnProperty('container')) {
                this.container = [];
                for (const o of obj.container || []) {
                    this.container.push(new SpecimenContainerComponent(o));
                }
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = [];
                for (const o of obj.condition || []) {
                    this.condition.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.Specimen = Specimen;
class SpecimenDefinitionContainerAdditiveComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('additive')) {
                this.additive = new Element(obj.additive);
            }
        }
    }
}
exports.SpecimenDefinitionContainerAdditiveComponent = SpecimenDefinitionContainerAdditiveComponent;
class SpecimenDefinitionHandlingComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('conditionSet')) {
                this.conditionSet = new CodeableConcept(obj.conditionSet);
            }
            if (obj.hasOwnProperty('tempRange')) {
                this.tempRange = new Range(obj.tempRange);
            }
            if (obj.hasOwnProperty('maxDuration')) {
                this.maxDuration = new Duration(obj.maxDuration);
            }
            if (obj.hasOwnProperty('lightExposure')) {
                this.lightExposure = obj.lightExposure;
            }
            if (obj.hasOwnProperty('instruction')) {
                this.instruction = obj.instruction;
            }
        }
    }
}
exports.SpecimenDefinitionHandlingComponent = SpecimenDefinitionHandlingComponent;
class SpecimenDefinitionSpecimenToLabComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('isDerived')) {
                this.isDerived = obj.isDerived;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('preference')) {
                this.preference = obj.preference;
            }
            if (obj.hasOwnProperty('containerMaterial')) {
                this.containerMaterial = new CodeableConcept(obj.containerMaterial);
            }
            if (obj.hasOwnProperty('containerType')) {
                this.containerType = new CodeableConcept(obj.containerType);
            }
            if (obj.hasOwnProperty('containerCap')) {
                this.containerCap = new CodeableConcept(obj.containerCap);
            }
            if (obj.hasOwnProperty('containerDescription')) {
                this.containerDescription = obj.containerDescription;
            }
            if (obj.hasOwnProperty('containerCapacity')) {
                this.containerCapacity = new SimpleQuantity(obj.containerCapacity);
            }
            if (obj.hasOwnProperty('containerMinimumVolume')) {
                this.containerMinimumVolume = new SimpleQuantity(obj.containerMinimumVolume);
            }
            if (obj.hasOwnProperty('containerAdditive')) {
                this.containerAdditive = [];
                for (const o of obj.containerAdditive || []) {
                    this.containerAdditive.push(new SpecimenDefinitionContainerAdditiveComponent(o));
                }
            }
            if (obj.hasOwnProperty('containerPreparation')) {
                this.containerPreparation = obj.containerPreparation;
            }
            if (obj.hasOwnProperty('requirement')) {
                this.requirement = obj.requirement;
            }
            if (obj.hasOwnProperty('retentionTime')) {
                this.retentionTime = new Duration(obj.retentionTime);
            }
            if (obj.hasOwnProperty('rejectionCriterion')) {
                this.rejectionCriterion = [];
                for (const o of obj.rejectionCriterion || []) {
                    this.rejectionCriterion.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('handling')) {
                this.handling = [];
                for (const o of obj.handling || []) {
                    this.handling.push(new SpecimenDefinitionHandlingComponent(o));
                }
            }
        }
    }
}
exports.SpecimenDefinitionSpecimenToLabComponent = SpecimenDefinitionSpecimenToLabComponent;
class SpecimenDefinition extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SpecimenDefinition';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('typeCollected')) {
                this.typeCollected = new CodeableConcept(obj.typeCollected);
            }
            if (obj.hasOwnProperty('patientPreparation')) {
                this.patientPreparation = obj.patientPreparation;
            }
            if (obj.hasOwnProperty('timeAspect')) {
                this.timeAspect = obj.timeAspect;
            }
            if (obj.hasOwnProperty('collection')) {
                this.collection = [];
                for (const o of obj.collection || []) {
                    this.collection.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('specimenToLab')) {
                this.specimenToLab = [];
                for (const o of obj.specimenToLab || []) {
                    this.specimenToLab.push(new SpecimenDefinitionSpecimenToLabComponent(o));
                }
            }
        }
    }
}
exports.SpecimenDefinition = SpecimenDefinition;
class StructureMapStructureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('alias')) {
                this.alias = obj.alias;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.StructureMapStructureComponent = StructureMapStructureComponent;
class StructureMapInputComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('mode')) {
                this.mode = obj.mode;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.StructureMapInputComponent = StructureMapInputComponent;
class StructureMapSourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('context')) {
                this.context = obj.context;
            }
            if (obj.hasOwnProperty('min')) {
                this.min = obj.min;
            }
            if (obj.hasOwnProperty('max')) {
                this.max = obj.max;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('defaultValue')) {
                this.defaultValue = new Element(obj.defaultValue);
            }
            if (obj.hasOwnProperty('element')) {
                this.element = obj.element;
            }
            if (obj.hasOwnProperty('listMode')) {
                this.listMode = obj.listMode;
            }
            if (obj.hasOwnProperty('variable')) {
                this.variable = obj.variable;
            }
            if (obj.hasOwnProperty('condition')) {
                this.condition = obj.condition;
            }
            if (obj.hasOwnProperty('check')) {
                this.check = obj.check;
            }
            if (obj.hasOwnProperty('logMessage')) {
                this.logMessage = obj.logMessage;
            }
        }
    }
}
exports.StructureMapSourceComponent = StructureMapSourceComponent;
class StructureMapParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.StructureMapParameterComponent = StructureMapParameterComponent;
class StructureMapTargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('context')) {
                this.context = obj.context;
            }
            if (obj.hasOwnProperty('contextType')) {
                this.contextType = obj.contextType;
            }
            if (obj.hasOwnProperty('element')) {
                this.element = obj.element;
            }
            if (obj.hasOwnProperty('variable')) {
                this.variable = obj.variable;
            }
            if (obj.hasOwnProperty('listMode')) {
                this.listMode = obj.listMode;
            }
            if (obj.hasOwnProperty('listRuleId')) {
                this.listRuleId = obj.listRuleId;
            }
            if (obj.hasOwnProperty('transform')) {
                this.transform = obj.transform;
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new StructureMapParameterComponent(o));
                }
            }
        }
    }
}
exports.StructureMapTargetComponent = StructureMapTargetComponent;
class StructureMapDependentComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('variable')) {
                this.variable = obj.variable;
            }
        }
    }
}
exports.StructureMapDependentComponent = StructureMapDependentComponent;
class StructureMapRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new StructureMapSourceComponent(o));
                }
            }
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new StructureMapTargetComponent(o));
                }
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new StructureMapRuleComponent(o));
                }
            }
            if (obj.hasOwnProperty('dependent')) {
                this.dependent = [];
                for (const o of obj.dependent || []) {
                    this.dependent.push(new StructureMapDependentComponent(o));
                }
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.StructureMapRuleComponent = StructureMapRuleComponent;
class StructureMapGroupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('extends')) {
                this.extends = obj.extends;
            }
            if (obj.hasOwnProperty('typeMode')) {
                this.typeMode = obj.typeMode;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
            if (obj.hasOwnProperty('input')) {
                this.input = [];
                for (const o of obj.input || []) {
                    this.input.push(new StructureMapInputComponent(o));
                }
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new StructureMapRuleComponent(o));
                }
            }
        }
    }
}
exports.StructureMapGroupComponent = StructureMapGroupComponent;
class StructureMap extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'StructureMap';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('structure')) {
                this.structure = [];
                for (const o of obj.structure || []) {
                    this.structure.push(new StructureMapStructureComponent(o));
                }
            }
            if (obj.hasOwnProperty('import')) {
                this.import = obj.import;
            }
            if (obj.hasOwnProperty('group')) {
                this.group = [];
                for (const o of obj.group || []) {
                    this.group.push(new StructureMapGroupComponent(o));
                }
            }
        }
    }
}
exports.StructureMap = StructureMap;
class SubscriptionChannelComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('endpoint')) {
                this.endpoint = obj.endpoint;
            }
            if (obj.hasOwnProperty('payload')) {
                this.payload = obj.payload;
            }
            if (obj.hasOwnProperty('header')) {
                this.header = obj.header;
            }
        }
    }
}
exports.SubscriptionChannelComponent = SubscriptionChannelComponent;
class Subscription extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Subscription';
        if (obj) {
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactPoint(o));
                }
            }
            if (obj.hasOwnProperty('end')) {
                this.end = new Date(obj.end);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = obj.reason;
            }
            if (obj.hasOwnProperty('criteria')) {
                this.criteria = obj.criteria;
            }
            if (obj.hasOwnProperty('error')) {
                this.error = obj.error;
            }
            if (obj.hasOwnProperty('channel')) {
                this.channel = new SubscriptionChannelComponent(obj.channel);
            }
            if (obj.hasOwnProperty('tag')) {
                this.tag = [];
                for (const o of obj.tag || []) {
                    this.tag.push(new Coding(o));
                }
            }
        }
    }
}
exports.Subscription = Subscription;
class SubstanceInstanceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('expiry')) {
                this.expiry = new Date(obj.expiry);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
        }
    }
}
exports.SubstanceInstanceComponent = SubstanceInstanceComponent;
class SubstanceIngredientComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Ratio(obj.quantity);
            }
            if (obj.hasOwnProperty('substance')) {
                this.substance = new Element(obj.substance);
            }
        }
    }
}
exports.SubstanceIngredientComponent = SubstanceIngredientComponent;
class Substance extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Substance';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = [];
                for (const o of obj.category || []) {
                    this.category.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('instance')) {
                this.instance = [];
                for (const o of obj.instance || []) {
                    this.instance.push(new SubstanceInstanceComponent(o));
                }
            }
            if (obj.hasOwnProperty('ingredient')) {
                this.ingredient = [];
                for (const o of obj.ingredient || []) {
                    this.ingredient.push(new SubstanceIngredientComponent(o));
                }
            }
        }
    }
}
exports.Substance = Substance;
class SubstanceAmountReferenceRangeComponent extends Element {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('lowLimit')) {
                this.lowLimit = new Quantity(obj.lowLimit);
            }
            if (obj.hasOwnProperty('highLimit')) {
                this.highLimit = new Quantity(obj.highLimit);
            }
        }
    }
}
exports.SubstanceAmountReferenceRangeComponent = SubstanceAmountReferenceRangeComponent;
class SubstanceAmount extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Element(obj.amount);
            }
            if (obj.hasOwnProperty('amountType')) {
                this.amountType = new CodeableConcept(obj.amountType);
            }
            if (obj.hasOwnProperty('amountText')) {
                this.amountText = obj.amountText;
            }
            if (obj.hasOwnProperty('referenceRange')) {
                this.referenceRange = new SubstanceAmountReferenceRangeComponent(obj.referenceRange);
            }
        }
    }
}
exports.SubstanceAmount = SubstanceAmount;
class SubstanceMoiety extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('stereochemistry')) {
                this.stereochemistry = new CodeableConcept(obj.stereochemistry);
            }
            if (obj.hasOwnProperty('opticalActivity')) {
                this.opticalActivity = new CodeableConcept(obj.opticalActivity);
            }
            if (obj.hasOwnProperty('molecularFormula')) {
                this.molecularFormula = obj.molecularFormula;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SubstanceAmount(obj.amount);
            }
        }
    }
}
exports.SubstanceMoiety = SubstanceMoiety;
class SubstancePolymerStartingMaterialComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('material')) {
                this.material = new CodeableConcept(obj.material);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('isDefining')) {
                this.isDefining = obj.isDefining;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SubstanceAmount(obj.amount);
            }
        }
    }
}
exports.SubstancePolymerStartingMaterialComponent = SubstancePolymerStartingMaterialComponent;
class SubstancePolymerMonomerSetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('ratioType')) {
                this.ratioType = new CodeableConcept(obj.ratioType);
            }
            if (obj.hasOwnProperty('startingMaterial')) {
                this.startingMaterial = [];
                for (const o of obj.startingMaterial || []) {
                    this.startingMaterial.push(new SubstancePolymerStartingMaterialComponent(o));
                }
            }
        }
    }
}
exports.SubstancePolymerMonomerSetComponent = SubstancePolymerMonomerSetComponent;
class SubstancePolymerDegreeOfPolymerisationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('degree')) {
                this.degree = new CodeableConcept(obj.degree);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SubstanceAmount(obj.amount);
            }
        }
    }
}
exports.SubstancePolymerDegreeOfPolymerisationComponent = SubstancePolymerDegreeOfPolymerisationComponent;
class SubstancePolymerStructuralRepresentationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('representation')) {
                this.representation = obj.representation;
            }
            if (obj.hasOwnProperty('attachment')) {
                this.attachment = new Attachment(obj.attachment);
            }
        }
    }
}
exports.SubstancePolymerStructuralRepresentationComponent = SubstancePolymerStructuralRepresentationComponent;
class SubstancePolymerRepeatUnitComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('orientationOfPolymerisation')) {
                this.orientationOfPolymerisation = new CodeableConcept(obj.orientationOfPolymerisation);
            }
            if (obj.hasOwnProperty('repeatUnit')) {
                this.repeatUnit = obj.repeatUnit;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new SubstanceAmount(obj.amount);
            }
            if (obj.hasOwnProperty('degreeOfPolymerisation')) {
                this.degreeOfPolymerisation = [];
                for (const o of obj.degreeOfPolymerisation || []) {
                    this.degreeOfPolymerisation.push(new SubstancePolymerDegreeOfPolymerisationComponent(o));
                }
            }
            if (obj.hasOwnProperty('structuralRepresentation')) {
                this.structuralRepresentation = [];
                for (const o of obj.structuralRepresentation || []) {
                    this.structuralRepresentation.push(new SubstancePolymerStructuralRepresentationComponent(o));
                }
            }
        }
    }
}
exports.SubstancePolymerRepeatUnitComponent = SubstancePolymerRepeatUnitComponent;
class SubstancePolymerRepeatComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('numberOfUnits')) {
                this.numberOfUnits = obj.numberOfUnits;
            }
            if (obj.hasOwnProperty('averageMolecularFormula')) {
                this.averageMolecularFormula = obj.averageMolecularFormula;
            }
            if (obj.hasOwnProperty('repeatUnitAmountType')) {
                this.repeatUnitAmountType = new CodeableConcept(obj.repeatUnitAmountType);
            }
            if (obj.hasOwnProperty('repeatUnit')) {
                this.repeatUnit = [];
                for (const o of obj.repeatUnit || []) {
                    this.repeatUnit.push(new SubstancePolymerRepeatUnitComponent(o));
                }
            }
        }
    }
}
exports.SubstancePolymerRepeatComponent = SubstancePolymerRepeatComponent;
class SubstancePolymer extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SubstancePolymer';
        if (obj) {
            if (obj.hasOwnProperty('class')) {
                this.class = new CodeableConcept(obj.class);
            }
            if (obj.hasOwnProperty('geometry')) {
                this.geometry = new CodeableConcept(obj.geometry);
            }
            if (obj.hasOwnProperty('copolymerConnectivity')) {
                this.copolymerConnectivity = [];
                for (const o of obj.copolymerConnectivity || []) {
                    this.copolymerConnectivity.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('modification')) {
                this.modification = obj.modification;
            }
            if (obj.hasOwnProperty('monomerSet')) {
                this.monomerSet = [];
                for (const o of obj.monomerSet || []) {
                    this.monomerSet.push(new SubstancePolymerMonomerSetComponent(o));
                }
            }
            if (obj.hasOwnProperty('repeat')) {
                this.repeat = [];
                for (const o of obj.repeat || []) {
                    this.repeat.push(new SubstancePolymerRepeatComponent(o));
                }
            }
        }
    }
}
exports.SubstancePolymer = SubstancePolymer;
class SubstanceReferenceInformationGeneComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('geneSequenceOrigin')) {
                this.geneSequenceOrigin = new CodeableConcept(obj.geneSequenceOrigin);
            }
            if (obj.hasOwnProperty('gene')) {
                this.gene = new CodeableConcept(obj.gene);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SubstanceReferenceInformationGeneComponent = SubstanceReferenceInformationGeneComponent;
class SubstanceReferenceInformationGeneElementComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('element')) {
                this.element = new Identifier(obj.element);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SubstanceReferenceInformationGeneElementComponent = SubstanceReferenceInformationGeneElementComponent;
class SubstanceReferenceInformationClassificationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('domain')) {
                this.domain = new CodeableConcept(obj.domain);
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = new CodeableConcept(obj.classification);
            }
            if (obj.hasOwnProperty('subtype')) {
                this.subtype = [];
                for (const o of obj.subtype || []) {
                    this.subtype.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SubstanceReferenceInformationClassificationComponent = SubstanceReferenceInformationClassificationComponent;
class SubstanceReferenceInformationRelationshipComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('substance')) {
                this.substance = new Element(obj.substance);
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = new CodeableConcept(obj.relationship);
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = new CodeableConcept(obj.interaction);
            }
            if (obj.hasOwnProperty('isDefining')) {
                this.isDefining = obj.isDefining;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Element(obj.amount);
            }
            if (obj.hasOwnProperty('amountType')) {
                this.amountType = new CodeableConcept(obj.amountType);
            }
            if (obj.hasOwnProperty('amountText')) {
                this.amountText = obj.amountText;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SubstanceReferenceInformationRelationshipComponent = SubstanceReferenceInformationRelationshipComponent;
class SubstanceReferenceInformationTargetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('target')) {
                this.target = new Identifier(obj.target);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('interaction')) {
                this.interaction = new CodeableConcept(obj.interaction);
            }
            if (obj.hasOwnProperty('organism')) {
                this.organism = new CodeableConcept(obj.organism);
            }
            if (obj.hasOwnProperty('organismType')) {
                this.organismType = new CodeableConcept(obj.organismType);
            }
            if (obj.hasOwnProperty('source')) {
                this.source = [];
                for (const o of obj.source || []) {
                    this.source.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = new Element(obj.amount);
            }
            if (obj.hasOwnProperty('amountType')) {
                this.amountType = new CodeableConcept(obj.amountType);
            }
        }
    }
}
exports.SubstanceReferenceInformationTargetComponent = SubstanceReferenceInformationTargetComponent;
class SubstanceReferenceInformation extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SubstanceReferenceInformation';
        if (obj) {
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('gene')) {
                this.gene = [];
                for (const o of obj.gene || []) {
                    this.gene.push(new SubstanceReferenceInformationGeneComponent(o));
                }
            }
            if (obj.hasOwnProperty('geneElement')) {
                this.geneElement = [];
                for (const o of obj.geneElement || []) {
                    this.geneElement.push(new SubstanceReferenceInformationGeneElementComponent(o));
                }
            }
            if (obj.hasOwnProperty('classification')) {
                this.classification = [];
                for (const o of obj.classification || []) {
                    this.classification.push(new SubstanceReferenceInformationClassificationComponent(o));
                }
            }
            if (obj.hasOwnProperty('relationship')) {
                this.relationship = [];
                for (const o of obj.relationship || []) {
                    this.relationship.push(new SubstanceReferenceInformationRelationshipComponent(o));
                }
            }
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new SubstanceReferenceInformationTargetComponent(o));
                }
            }
        }
    }
}
exports.SubstanceReferenceInformation = SubstanceReferenceInformation;
class SubstanceSpecificationMoietyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('role')) {
                this.role = new CodeableConcept(obj.role);
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('stereochemistry')) {
                this.stereochemistry = new CodeableConcept(obj.stereochemistry);
            }
            if (obj.hasOwnProperty('opticalActivity')) {
                this.opticalActivity = new CodeableConcept(obj.opticalActivity);
            }
            if (obj.hasOwnProperty('molecularFormula')) {
                this.molecularFormula = obj.molecularFormula;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = obj.amount;
            }
        }
    }
}
exports.SubstanceSpecificationMoietyComponent = SubstanceSpecificationMoietyComponent;
class SubstanceSpecificationPropertyComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = new CodeableConcept(obj.name);
            }
            if (obj.hasOwnProperty('parameters')) {
                this.parameters = obj.parameters;
            }
            if (obj.hasOwnProperty('substanceId')) {
                this.substanceId = new Identifier(obj.substanceId);
            }
            if (obj.hasOwnProperty('substanceName')) {
                this.substanceName = obj.substanceName;
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = obj.amount;
            }
        }
    }
}
exports.SubstanceSpecificationPropertyComponent = SubstanceSpecificationPropertyComponent;
class SubstanceSpecificationMolecularWeightComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = obj.amount;
            }
        }
    }
}
exports.SubstanceSpecificationMolecularWeightComponent = SubstanceSpecificationMolecularWeightComponent;
class SubstanceSpecificationIsotopeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('nuclideId')) {
                this.nuclideId = new Identifier(obj.nuclideId);
            }
            if (obj.hasOwnProperty('nuclideName')) {
                this.nuclideName = new CodeableConcept(obj.nuclideName);
            }
            if (obj.hasOwnProperty('substitutionType')) {
                this.substitutionType = new CodeableConcept(obj.substitutionType);
            }
            if (obj.hasOwnProperty('nuclideHalfLife')) {
                this.nuclideHalfLife = new Quantity(obj.nuclideHalfLife);
            }
            if (obj.hasOwnProperty('amount')) {
                this.amount = obj.amount;
            }
            if (obj.hasOwnProperty('molecularWeight')) {
                this.molecularWeight = new SubstanceSpecificationMolecularWeightComponent(obj.molecularWeight);
            }
        }
    }
}
exports.SubstanceSpecificationIsotopeComponent = SubstanceSpecificationIsotopeComponent;
class SubstanceSpecificationStructuralRepresentationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('representation')) {
                this.representation = obj.representation;
            }
            if (obj.hasOwnProperty('attachment')) {
                this.attachment = new Attachment(obj.attachment);
            }
        }
    }
}
exports.SubstanceSpecificationStructuralRepresentationComponent = SubstanceSpecificationStructuralRepresentationComponent;
class SubstanceSpecificationStructureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('stereochemistry')) {
                this.stereochemistry = new CodeableConcept(obj.stereochemistry);
            }
            if (obj.hasOwnProperty('opticalActivity')) {
                this.opticalActivity = new CodeableConcept(obj.opticalActivity);
            }
            if (obj.hasOwnProperty('molecularFormula')) {
                this.molecularFormula = obj.molecularFormula;
            }
            if (obj.hasOwnProperty('molecularFormulaByMoiety')) {
                this.molecularFormulaByMoiety = obj.molecularFormulaByMoiety;
            }
            if (obj.hasOwnProperty('isotope')) {
                this.isotope = [];
                for (const o of obj.isotope || []) {
                    this.isotope.push(new SubstanceSpecificationIsotopeComponent(o));
                }
            }
            if (obj.hasOwnProperty('molecularWeight')) {
                this.molecularWeight = new SubstanceSpecificationMolecularWeightComponent(obj.molecularWeight);
            }
            if (obj.hasOwnProperty('referenceSource')) {
                this.referenceSource = [];
                for (const o of obj.referenceSource || []) {
                    this.referenceSource.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('structuralRepresentation')) {
                this.structuralRepresentation = [];
                for (const o of obj.structuralRepresentation || []) {
                    this.structuralRepresentation.push(new SubstanceSpecificationStructuralRepresentationComponent(o));
                }
            }
        }
    }
}
exports.SubstanceSpecificationStructureComponent = SubstanceSpecificationStructureComponent;
class SubstanceSpecificationSubstanceCodeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('statusDate')) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('referenceSource')) {
                this.referenceSource = obj.referenceSource;
            }
        }
    }
}
exports.SubstanceSpecificationSubstanceCodeComponent = SubstanceSpecificationSubstanceCodeComponent;
class SubstanceSpecificationOfficialNameComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('authority')) {
                this.authority = new CodeableConcept(obj.authority);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new CodeableConcept(obj.status);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
        }
    }
}
exports.SubstanceSpecificationOfficialNameComponent = SubstanceSpecificationOfficialNameComponent;
class SubstanceSpecificationSubstanceNameComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('language')) {
                this.language = [];
                for (const o of obj.language || []) {
                    this.language.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('domain')) {
                this.domain = [];
                for (const o of obj.domain || []) {
                    this.domain.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('officialName')) {
                this.officialName = [];
                for (const o of obj.officialName || []) {
                    this.officialName.push(new SubstanceSpecificationOfficialNameComponent(o));
                }
            }
            if (obj.hasOwnProperty('referenceSource')) {
                this.referenceSource = obj.referenceSource;
            }
        }
    }
}
exports.SubstanceSpecificationSubstanceNameComponent = SubstanceSpecificationSubstanceNameComponent;
class SubstanceSpecification extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SubstanceSpecification';
        if (obj) {
            if (obj.hasOwnProperty('comment')) {
                this.comment = obj.comment;
            }
            if (obj.hasOwnProperty('stoichiometric')) {
                this.stoichiometric = obj.stoichiometric;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('referenceSource')) {
                this.referenceSource = obj.referenceSource;
            }
            if (obj.hasOwnProperty('moiety')) {
                this.moiety = [];
                for (const o of obj.moiety || []) {
                    this.moiety.push(new SubstanceSpecificationMoietyComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = [];
                for (const o of obj.property || []) {
                    this.property.push(new SubstanceSpecificationPropertyComponent(o));
                }
            }
            if (obj.hasOwnProperty('referenceInformation')) {
                this.referenceInformation = new ResourceReference(obj.referenceInformation);
            }
            if (obj.hasOwnProperty('structure')) {
                this.structure = new SubstanceSpecificationStructureComponent(obj.structure);
            }
            if (obj.hasOwnProperty('substanceCode')) {
                this.substanceCode = [];
                for (const o of obj.substanceCode || []) {
                    this.substanceCode.push(new SubstanceSpecificationSubstanceCodeComponent(o));
                }
            }
            if (obj.hasOwnProperty('substanceName')) {
                this.substanceName = [];
                for (const o of obj.substanceName || []) {
                    this.substanceName.push(new SubstanceSpecificationSubstanceNameComponent(o));
                }
            }
            if (obj.hasOwnProperty('molecularWeight')) {
                this.molecularWeight = [];
                for (const o of obj.molecularWeight || []) {
                    this.molecularWeight.push(new SubstanceSpecificationMolecularWeightComponent(o));
                }
            }
            if (obj.hasOwnProperty('polymer')) {
                this.polymer = new ResourceReference(obj.polymer);
            }
        }
    }
}
exports.SubstanceSpecification = SubstanceSpecification;
class SupplyDeliverySuppliedItemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new SimpleQuantity(obj.quantity);
            }
            if (obj.hasOwnProperty('item')) {
                this.item = new Element(obj.item);
            }
        }
    }
}
exports.SupplyDeliverySuppliedItemComponent = SupplyDeliverySuppliedItemComponent;
class SupplyDelivery extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SupplyDelivery';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('suppliedItem')) {
                this.suppliedItem = new SupplyDeliverySuppliedItemComponent(obj.suppliedItem);
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('supplier')) {
                this.supplier = new ResourceReference(obj.supplier);
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = new ResourceReference(obj.destination);
            }
            if (obj.hasOwnProperty('receiver')) {
                this.receiver = [];
                for (const o of obj.receiver || []) {
                    this.receiver.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.SupplyDelivery = SupplyDelivery;
class SupplyRequestParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.SupplyRequestParameterComponent = SupplyRequestParameterComponent;
class SupplyRequest extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'SupplyRequest';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('category')) {
                this.category = new CodeableConcept(obj.category);
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('item')) {
                this.item = new Element(obj.item);
            }
            if (obj.hasOwnProperty('quantity')) {
                this.quantity = new Quantity(obj.quantity);
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new SupplyRequestParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('occurrence')) {
                this.occurrence = new Element(obj.occurrence);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('supplier')) {
                this.supplier = [];
                for (const o of obj.supplier || []) {
                    this.supplier.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = [];
                for (const o of obj.reasonCode || []) {
                    this.reasonCode.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = [];
                for (const o of obj.reasonReference || []) {
                    this.reasonReference.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('deliverFrom')) {
                this.deliverFrom = new ResourceReference(obj.deliverFrom);
            }
            if (obj.hasOwnProperty('deliverTo')) {
                this.deliverTo = new ResourceReference(obj.deliverTo);
            }
        }
    }
}
exports.SupplyRequest = SupplyRequest;
class TaskRestrictionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('repetitions')) {
                this.repetitions = obj.repetitions;
            }
            if (obj.hasOwnProperty('period')) {
                this.period = new Period(obj.period);
            }
            if (obj.hasOwnProperty('recipient')) {
                this.recipient = [];
                for (const o of obj.recipient || []) {
                    this.recipient.push(new ResourceReference(o));
                }
            }
        }
    }
}
exports.TaskRestrictionComponent = TaskRestrictionComponent;
class TaskParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.TaskParameterComponent = TaskParameterComponent;
class TaskOutputComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new CodeableConcept(obj.type);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.TaskOutputComponent = TaskOutputComponent;
class Task extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'Task';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('instantiatesCanonical')) {
                this.instantiatesCanonical = obj.instantiatesCanonical;
            }
            if (obj.hasOwnProperty('instantiatesUri')) {
                this.instantiatesUri = obj.instantiatesUri;
            }
            if (obj.hasOwnProperty('basedOn')) {
                this.basedOn = [];
                for (const o of obj.basedOn || []) {
                    this.basedOn.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('groupIdentifier')) {
                this.groupIdentifier = new Identifier(obj.groupIdentifier);
            }
            if (obj.hasOwnProperty('partOf')) {
                this.partOf = [];
                for (const o of obj.partOf || []) {
                    this.partOf.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusReason')) {
                this.statusReason = new CodeableConcept(obj.statusReason);
            }
            if (obj.hasOwnProperty('businessStatus')) {
                this.businessStatus = new CodeableConcept(obj.businessStatus);
            }
            if (obj.hasOwnProperty('intent')) {
                this.intent = obj.intent;
            }
            if (obj.hasOwnProperty('priority')) {
                this.priority = obj.priority;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = new CodeableConcept(obj.code);
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = new ResourceReference(obj.focus);
            }
            if (obj.hasOwnProperty('for')) {
                this.for = new ResourceReference(obj.for);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = new ResourceReference(obj.context);
            }
            if (obj.hasOwnProperty('executionPeriod')) {
                this.executionPeriod = new Period(obj.executionPeriod);
            }
            if (obj.hasOwnProperty('authoredOn')) {
                this.authoredOn = new Date(obj.authoredOn);
            }
            if (obj.hasOwnProperty('lastModified')) {
                this.lastModified = new Date(obj.lastModified);
            }
            if (obj.hasOwnProperty('requester')) {
                this.requester = new ResourceReference(obj.requester);
            }
            if (obj.hasOwnProperty('performerType')) {
                this.performerType = [];
                for (const o of obj.performerType || []) {
                    this.performerType.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('owner')) {
                this.owner = new ResourceReference(obj.owner);
            }
            if (obj.hasOwnProperty('location')) {
                this.location = new ResourceReference(obj.location);
            }
            if (obj.hasOwnProperty('reasonCode')) {
                this.reasonCode = new CodeableConcept(obj.reasonCode);
            }
            if (obj.hasOwnProperty('reasonReference')) {
                this.reasonReference = new ResourceReference(obj.reasonReference);
            }
            if (obj.hasOwnProperty('insurance')) {
                this.insurance = [];
                for (const o of obj.insurance || []) {
                    this.insurance.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
            if (obj.hasOwnProperty('relevantHistory')) {
                this.relevantHistory = [];
                for (const o of obj.relevantHistory || []) {
                    this.relevantHistory.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('restriction')) {
                this.restriction = new TaskRestrictionComponent(obj.restriction);
            }
            if (obj.hasOwnProperty('input')) {
                this.input = [];
                for (const o of obj.input || []) {
                    this.input.push(new TaskParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('output')) {
                this.output = [];
                for (const o of obj.output || []) {
                    this.output.push(new TaskOutputComponent(o));
                }
            }
        }
    }
}
exports.Task = Task;
class ModelInfo {
    constructor(obj) {
        if (obj) {
        }
    }
}
exports.ModelInfo = ModelInfo;
class TerminologyCapabilitiesSoftwareComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
        }
    }
}
exports.TerminologyCapabilitiesSoftwareComponent = TerminologyCapabilitiesSoftwareComponent;
class TerminologyCapabilitiesImplementationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
        }
    }
}
exports.TerminologyCapabilitiesImplementationComponent = TerminologyCapabilitiesImplementationComponent;
class TerminologyCapabilitiesFilterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('op')) {
                this.op = obj.op;
            }
        }
    }
}
exports.TerminologyCapabilitiesFilterComponent = TerminologyCapabilitiesFilterComponent;
class TerminologyCapabilitiesVersionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('isDefault')) {
                this.isDefault = obj.isDefault;
            }
            if (obj.hasOwnProperty('compositional')) {
                this.compositional = obj.compositional;
            }
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('filter')) {
                this.filter = [];
                for (const o of obj.filter || []) {
                    this.filter.push(new TerminologyCapabilitiesFilterComponent(o));
                }
            }
            if (obj.hasOwnProperty('property')) {
                this.property = obj.property;
            }
        }
    }
}
exports.TerminologyCapabilitiesVersionComponent = TerminologyCapabilitiesVersionComponent;
class TerminologyCapabilitiesCodeSystemComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = [];
                for (const o of obj.version || []) {
                    this.version.push(new TerminologyCapabilitiesVersionComponent(o));
                }
            }
            if (obj.hasOwnProperty('subsumption')) {
                this.subsumption = obj.subsumption;
            }
        }
    }
}
exports.TerminologyCapabilitiesCodeSystemComponent = TerminologyCapabilitiesCodeSystemComponent;
class TerminologyCapabilitiesParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('documentation')) {
                this.documentation = obj.documentation;
            }
        }
    }
}
exports.TerminologyCapabilitiesParameterComponent = TerminologyCapabilitiesParameterComponent;
class TerminologyCapabilitiesExpansionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('hierarchical')) {
                this.hierarchical = obj.hierarchical;
            }
            if (obj.hasOwnProperty('paging')) {
                this.paging = obj.paging;
            }
            if (obj.hasOwnProperty('incomplete')) {
                this.incomplete = obj.incomplete;
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new TerminologyCapabilitiesParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('textFilter')) {
                this.textFilter = obj.textFilter;
            }
        }
    }
}
exports.TerminologyCapabilitiesExpansionComponent = TerminologyCapabilitiesExpansionComponent;
class TerminologyCapabilitiesValidateCodeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('translations')) {
                this.translations = obj.translations;
            }
        }
    }
}
exports.TerminologyCapabilitiesValidateCodeComponent = TerminologyCapabilitiesValidateCodeComponent;
class TerminologyCapabilitiesTranslationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('needsMap')) {
                this.needsMap = obj.needsMap;
            }
        }
    }
}
exports.TerminologyCapabilitiesTranslationComponent = TerminologyCapabilitiesTranslationComponent;
class TerminologyCapabilitiesClosureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('translation')) {
                this.translation = obj.translation;
            }
        }
    }
}
exports.TerminologyCapabilitiesClosureComponent = TerminologyCapabilitiesClosureComponent;
class TerminologyCapabilities extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'TerminologyCapabilities';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('kind')) {
                this.kind = obj.kind;
            }
            if (obj.hasOwnProperty('software')) {
                this.software = new TerminologyCapabilitiesSoftwareComponent(obj.software);
            }
            if (obj.hasOwnProperty('implementation')) {
                this.implementation = new TerminologyCapabilitiesImplementationComponent(obj.implementation);
            }
            if (obj.hasOwnProperty('lockedDate')) {
                this.lockedDate = obj.lockedDate;
            }
            if (obj.hasOwnProperty('codeSystem')) {
                this.codeSystem = [];
                for (const o of obj.codeSystem || []) {
                    this.codeSystem.push(new TerminologyCapabilitiesCodeSystemComponent(o));
                }
            }
            if (obj.hasOwnProperty('expansion')) {
                this.expansion = new TerminologyCapabilitiesExpansionComponent(obj.expansion);
            }
            if (obj.hasOwnProperty('codeSearch')) {
                this.codeSearch = obj.codeSearch;
            }
            if (obj.hasOwnProperty('validateCode')) {
                this.validateCode = new TerminologyCapabilitiesValidateCodeComponent(obj.validateCode);
            }
            if (obj.hasOwnProperty('translation')) {
                this.translation = new TerminologyCapabilitiesTranslationComponent(obj.translation);
            }
            if (obj.hasOwnProperty('closure')) {
                this.closure = new TerminologyCapabilitiesClosureComponent(obj.closure);
            }
        }
    }
}
exports.TerminologyCapabilities = TerminologyCapabilities;
class TestReportParticipantComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('uri')) {
                this.uri = obj.uri;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
        }
    }
}
exports.TestReportParticipantComponent = TestReportParticipantComponent;
class TestReportOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('result')) {
                this.result = obj.result;
            }
            if (obj.hasOwnProperty('message')) {
                this.message = obj.message;
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = obj.detail;
            }
        }
    }
}
exports.TestReportOperationComponent = TestReportOperationComponent;
class TestReportAssertComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('result')) {
                this.result = obj.result;
            }
            if (obj.hasOwnProperty('message')) {
                this.message = obj.message;
            }
            if (obj.hasOwnProperty('detail')) {
                this.detail = obj.detail;
            }
        }
    }
}
exports.TestReportAssertComponent = TestReportAssertComponent;
class TestReportSetupActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestReportOperationComponent(obj.operation);
            }
            if (obj.hasOwnProperty('assert')) {
                this.assert = new TestReportAssertComponent(obj.assert);
            }
        }
    }
}
exports.TestReportSetupActionComponent = TestReportSetupActionComponent;
class TestReportSetupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestReportSetupActionComponent(o));
                }
            }
        }
    }
}
exports.TestReportSetupComponent = TestReportSetupComponent;
class TestReportTestActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestReportOperationComponent(obj.operation);
            }
            if (obj.hasOwnProperty('assert')) {
                this.assert = new TestReportAssertComponent(obj.assert);
            }
        }
    }
}
exports.TestReportTestActionComponent = TestReportTestActionComponent;
class TestReportTestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestReportTestActionComponent(o));
                }
            }
        }
    }
}
exports.TestReportTestComponent = TestReportTestComponent;
class TestReportTeardownActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestReportOperationComponent(obj.operation);
            }
        }
    }
}
exports.TestReportTeardownActionComponent = TestReportTeardownActionComponent;
class TestReportTeardownComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestReportTeardownActionComponent(o));
                }
            }
        }
    }
}
exports.TestReportTeardownComponent = TestReportTeardownComponent;
class TestReport extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'TestReport';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('testScript')) {
                this.testScript = new ResourceReference(obj.testScript);
            }
            if (obj.hasOwnProperty('result')) {
                this.result = obj.result;
            }
            if (obj.hasOwnProperty('score')) {
                this.score = obj.score;
            }
            if (obj.hasOwnProperty('tester')) {
                this.tester = obj.tester;
            }
            if (obj.hasOwnProperty('issued')) {
                this.issued = new Date(obj.issued);
            }
            if (obj.hasOwnProperty('participant')) {
                this.participant = [];
                for (const o of obj.participant || []) {
                    this.participant.push(new TestReportParticipantComponent(o));
                }
            }
            if (obj.hasOwnProperty('setup')) {
                this.setup = new TestReportSetupComponent(obj.setup);
            }
            if (obj.hasOwnProperty('test')) {
                this.test = [];
                for (const o of obj.test || []) {
                    this.test.push(new TestReportTestComponent(o));
                }
            }
            if (obj.hasOwnProperty('teardown')) {
                this.teardown = new TestReportTeardownComponent(obj.teardown);
            }
        }
    }
}
exports.TestReport = TestReport;
class TestScriptOriginComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('index')) {
                this.index = obj.index;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = new Coding(obj.profile);
            }
        }
    }
}
exports.TestScriptOriginComponent = TestScriptOriginComponent;
class TestScriptDestinationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('index')) {
                this.index = obj.index;
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = new Coding(obj.profile);
            }
        }
    }
}
exports.TestScriptDestinationComponent = TestScriptDestinationComponent;
class TestScriptLinkComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
        }
    }
}
exports.TestScriptLinkComponent = TestScriptLinkComponent;
class TestScriptCapabilityComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('required')) {
                this.required = obj.required;
            }
            if (obj.hasOwnProperty('validated')) {
                this.validated = obj.validated;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('origin')) {
                this.origin = obj.origin;
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = obj.destination;
            }
            if (obj.hasOwnProperty('link')) {
                this.link = obj.link;
            }
            if (obj.hasOwnProperty('capabilities')) {
                this.capabilities = obj.capabilities;
            }
        }
    }
}
exports.TestScriptCapabilityComponent = TestScriptCapabilityComponent;
class TestScriptMetadataComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('link')) {
                this.link = [];
                for (const o of obj.link || []) {
                    this.link.push(new TestScriptLinkComponent(o));
                }
            }
            if (obj.hasOwnProperty('capability')) {
                this.capability = [];
                for (const o of obj.capability || []) {
                    this.capability.push(new TestScriptCapabilityComponent(o));
                }
            }
        }
    }
}
exports.TestScriptMetadataComponent = TestScriptMetadataComponent;
class TestScriptFixtureComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('autocreate')) {
                this.autocreate = obj.autocreate;
            }
            if (obj.hasOwnProperty('autodelete')) {
                this.autodelete = obj.autodelete;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = new ResourceReference(obj.resource);
            }
        }
    }
}
exports.TestScriptFixtureComponent = TestScriptFixtureComponent;
class TestScriptVariableComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('defaultValue')) {
                this.defaultValue = obj.defaultValue;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('headerField')) {
                this.headerField = obj.headerField;
            }
            if (obj.hasOwnProperty('hint')) {
                this.hint = obj.hint;
            }
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('sourceId')) {
                this.sourceId = obj.sourceId;
            }
        }
    }
}
exports.TestScriptVariableComponent = TestScriptVariableComponent;
class TestScriptRuleParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.TestScriptRuleParamComponent = TestScriptRuleParamComponent;
class TestScriptRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('resource')) {
                this.resource = new ResourceReference(obj.resource);
            }
            if (obj.hasOwnProperty('param')) {
                this.param = [];
                for (const o of obj.param || []) {
                    this.param.push(new TestScriptRuleParamComponent(o));
                }
            }
        }
    }
}
exports.TestScriptRuleComponent = TestScriptRuleComponent;
class TestScriptRulesetRuleParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.TestScriptRulesetRuleParamComponent = TestScriptRulesetRuleParamComponent;
class TestScriptRulesetRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('ruleId')) {
                this.ruleId = obj.ruleId;
            }
            if (obj.hasOwnProperty('param')) {
                this.param = [];
                for (const o of obj.param || []) {
                    this.param.push(new TestScriptRulesetRuleParamComponent(o));
                }
            }
        }
    }
}
exports.TestScriptRulesetRuleComponent = TestScriptRulesetRuleComponent;
class TestScriptRulesetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('resource')) {
                this.resource = new ResourceReference(obj.resource);
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new TestScriptRulesetRuleComponent(o));
                }
            }
        }
    }
}
exports.TestScriptRulesetComponent = TestScriptRulesetComponent;
class TestScriptRequestHeaderComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('field')) {
                this.field = obj.field;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.TestScriptRequestHeaderComponent = TestScriptRequestHeaderComponent;
class TestScriptOperationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = new Coding(obj.type);
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = obj.resource;
            }
            if (obj.hasOwnProperty('label')) {
                this.label = obj.label;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('accept')) {
                this.accept = obj.accept;
            }
            if (obj.hasOwnProperty('contentType')) {
                this.contentType = obj.contentType;
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = obj.destination;
            }
            if (obj.hasOwnProperty('encodeRequestUrl')) {
                this.encodeRequestUrl = obj.encodeRequestUrl;
            }
            if (obj.hasOwnProperty('origin')) {
                this.origin = obj.origin;
            }
            if (obj.hasOwnProperty('params')) {
                this.params = obj.params;
            }
            if (obj.hasOwnProperty('requestHeader')) {
                this.requestHeader = [];
                for (const o of obj.requestHeader || []) {
                    this.requestHeader.push(new TestScriptRequestHeaderComponent(o));
                }
            }
            if (obj.hasOwnProperty('requestId')) {
                this.requestId = obj.requestId;
            }
            if (obj.hasOwnProperty('responseId')) {
                this.responseId = obj.responseId;
            }
            if (obj.hasOwnProperty('sourceId')) {
                this.sourceId = obj.sourceId;
            }
            if (obj.hasOwnProperty('targetId')) {
                this.targetId = obj.targetId;
            }
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
        }
    }
}
exports.TestScriptOperationComponent = TestScriptOperationComponent;
class TestScriptActionAssertRuleParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.TestScriptActionAssertRuleParamComponent = TestScriptActionAssertRuleParamComponent;
class TestScriptActionAssertRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('ruleId')) {
                this.ruleId = obj.ruleId;
            }
            if (obj.hasOwnProperty('param')) {
                this.param = [];
                for (const o of obj.param || []) {
                    this.param.push(new TestScriptActionAssertRuleParamComponent(o));
                }
            }
        }
    }
}
exports.TestScriptActionAssertRuleComponent = TestScriptActionAssertRuleComponent;
class TestScriptParamComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.TestScriptParamComponent = TestScriptParamComponent;
class TestScriptActionAssertRulesetRuleComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('ruleId')) {
                this.ruleId = obj.ruleId;
            }
            if (obj.hasOwnProperty('param')) {
                this.param = [];
                for (const o of obj.param || []) {
                    this.param.push(new TestScriptParamComponent(o));
                }
            }
        }
    }
}
exports.TestScriptActionAssertRulesetRuleComponent = TestScriptActionAssertRulesetRuleComponent;
class TestScriptActionAssertRulesetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('rulesetId')) {
                this.rulesetId = obj.rulesetId;
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new TestScriptActionAssertRulesetRuleComponent(o));
                }
            }
        }
    }
}
exports.TestScriptActionAssertRulesetComponent = TestScriptActionAssertRulesetComponent;
class TestScriptAssertComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('label')) {
                this.label = obj.label;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('direction')) {
                this.direction = obj.direction;
            }
            if (obj.hasOwnProperty('compareToSourceId')) {
                this.compareToSourceId = obj.compareToSourceId;
            }
            if (obj.hasOwnProperty('compareToSourceExpression')) {
                this.compareToSourceExpression = obj.compareToSourceExpression;
            }
            if (obj.hasOwnProperty('compareToSourcePath')) {
                this.compareToSourcePath = obj.compareToSourcePath;
            }
            if (obj.hasOwnProperty('contentType')) {
                this.contentType = obj.contentType;
            }
            if (obj.hasOwnProperty('expression')) {
                this.expression = obj.expression;
            }
            if (obj.hasOwnProperty('headerField')) {
                this.headerField = obj.headerField;
            }
            if (obj.hasOwnProperty('minimumId')) {
                this.minimumId = obj.minimumId;
            }
            if (obj.hasOwnProperty('navigationLinks')) {
                this.navigationLinks = obj.navigationLinks;
            }
            if (obj.hasOwnProperty('operator')) {
                this.operator = obj.operator;
            }
            if (obj.hasOwnProperty('path')) {
                this.path = obj.path;
            }
            if (obj.hasOwnProperty('requestMethod')) {
                this.requestMethod = obj.requestMethod;
            }
            if (obj.hasOwnProperty('requestURL')) {
                this.requestURL = obj.requestURL;
            }
            if (obj.hasOwnProperty('resource')) {
                this.resource = obj.resource;
            }
            if (obj.hasOwnProperty('response')) {
                this.response = obj.response;
            }
            if (obj.hasOwnProperty('responseCode')) {
                this.responseCode = obj.responseCode;
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = new TestScriptActionAssertRuleComponent(obj.rule);
            }
            if (obj.hasOwnProperty('ruleset')) {
                this.ruleset = new TestScriptActionAssertRulesetComponent(obj.ruleset);
            }
            if (obj.hasOwnProperty('sourceId')) {
                this.sourceId = obj.sourceId;
            }
            if (obj.hasOwnProperty('validateProfileId')) {
                this.validateProfileId = obj.validateProfileId;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
            if (obj.hasOwnProperty('warningOnly')) {
                this.warningOnly = obj.warningOnly;
            }
        }
    }
}
exports.TestScriptAssertComponent = TestScriptAssertComponent;
class TestScriptSetupActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestScriptOperationComponent(obj.operation);
            }
            if (obj.hasOwnProperty('assert')) {
                this.assert = new TestScriptAssertComponent(obj.assert);
            }
        }
    }
}
exports.TestScriptSetupActionComponent = TestScriptSetupActionComponent;
class TestScriptSetupComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestScriptSetupActionComponent(o));
                }
            }
        }
    }
}
exports.TestScriptSetupComponent = TestScriptSetupComponent;
class TestScriptTestActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestScriptOperationComponent(obj.operation);
            }
            if (obj.hasOwnProperty('assert')) {
                this.assert = new TestScriptAssertComponent(obj.assert);
            }
        }
    }
}
exports.TestScriptTestActionComponent = TestScriptTestActionComponent;
class TestScriptTestComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestScriptTestActionComponent(o));
                }
            }
        }
    }
}
exports.TestScriptTestComponent = TestScriptTestComponent;
class TestScriptTeardownActionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('operation')) {
                this.operation = new TestScriptOperationComponent(obj.operation);
            }
        }
    }
}
exports.TestScriptTeardownActionComponent = TestScriptTeardownActionComponent;
class TestScriptTeardownComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('action')) {
                this.action = [];
                for (const o of obj.action || []) {
                    this.action.push(new TestScriptTeardownActionComponent(o));
                }
            }
        }
    }
}
exports.TestScriptTeardownComponent = TestScriptTeardownComponent;
class TestScript extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'TestScript';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('origin')) {
                this.origin = [];
                for (const o of obj.origin || []) {
                    this.origin.push(new TestScriptOriginComponent(o));
                }
            }
            if (obj.hasOwnProperty('destination')) {
                this.destination = [];
                for (const o of obj.destination || []) {
                    this.destination.push(new TestScriptDestinationComponent(o));
                }
            }
            if (obj.hasOwnProperty('metadata')) {
                this.metadata = new TestScriptMetadataComponent(obj.metadata);
            }
            if (obj.hasOwnProperty('fixture')) {
                this.fixture = [];
                for (const o of obj.fixture || []) {
                    this.fixture.push(new TestScriptFixtureComponent(o));
                }
            }
            if (obj.hasOwnProperty('profile')) {
                this.profile = [];
                for (const o of obj.profile || []) {
                    this.profile.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('variable')) {
                this.variable = [];
                for (const o of obj.variable || []) {
                    this.variable.push(new TestScriptVariableComponent(o));
                }
            }
            if (obj.hasOwnProperty('rule')) {
                this.rule = [];
                for (const o of obj.rule || []) {
                    this.rule.push(new TestScriptRuleComponent(o));
                }
            }
            if (obj.hasOwnProperty('ruleset')) {
                this.ruleset = [];
                for (const o of obj.ruleset || []) {
                    this.ruleset.push(new TestScriptRulesetComponent(o));
                }
            }
            if (obj.hasOwnProperty('setup')) {
                this.setup = new TestScriptSetupComponent(obj.setup);
            }
            if (obj.hasOwnProperty('test')) {
                this.test = [];
                for (const o of obj.test || []) {
                    this.test.push(new TestScriptTestComponent(o));
                }
            }
            if (obj.hasOwnProperty('teardown')) {
                this.teardown = new TestScriptTeardownComponent(obj.teardown);
            }
        }
    }
}
exports.TestScript = TestScript;
class UserSessionStatusComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('source')) {
                this.source = obj.source;
            }
        }
    }
}
exports.UserSessionStatusComponent = UserSessionStatusComponent;
class UserSessionContextComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('type')) {
                this.type = obj.type;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.UserSessionContextComponent = UserSessionContextComponent;
class UserSession extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'UserSession';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = new Identifier(obj.identifier);
            }
            if (obj.hasOwnProperty('user')) {
                this.user = new ResourceReference(obj.user);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = new UserSessionStatusComponent(obj.status);
            }
            if (obj.hasOwnProperty('workstation')) {
                this.workstation = new Identifier(obj.workstation);
            }
            if (obj.hasOwnProperty('focus')) {
                this.focus = [];
                for (const o of obj.focus || []) {
                    this.focus.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('created')) {
                this.created = new Date(obj.created);
            }
            if (obj.hasOwnProperty('expires')) {
                this.expires = new Date(obj.expires);
            }
            if (obj.hasOwnProperty('context')) {
                this.context = [];
                for (const o of obj.context || []) {
                    this.context.push(new UserSessionContextComponent(o));
                }
            }
        }
    }
}
exports.UserSession = UserSession;
class ValueSetDesignationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('language')) {
                this.language = obj.language;
            }
            if (obj.hasOwnProperty('use')) {
                this.use = new Coding(obj.use);
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.ValueSetDesignationComponent = ValueSetDesignationComponent;
class ValueSetConceptReferenceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('designation')) {
                this.designation = [];
                for (const o of obj.designation || []) {
                    this.designation.push(new ValueSetDesignationComponent(o));
                }
            }
        }
    }
}
exports.ValueSetConceptReferenceComponent = ValueSetConceptReferenceComponent;
class ValueSetFilterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('property')) {
                this.property = obj.property;
            }
            if (obj.hasOwnProperty('op')) {
                this.op = obj.op;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = obj.value;
            }
        }
    }
}
exports.ValueSetFilterComponent = ValueSetFilterComponent;
class ValueSetConceptSetComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('concept')) {
                this.concept = [];
                for (const o of obj.concept || []) {
                    this.concept.push(new ValueSetConceptReferenceComponent(o));
                }
            }
            if (obj.hasOwnProperty('filter')) {
                this.filter = [];
                for (const o of obj.filter || []) {
                    this.filter.push(new ValueSetFilterComponent(o));
                }
            }
            if (obj.hasOwnProperty('valueSet')) {
                this.valueSet = obj.valueSet;
            }
        }
    }
}
exports.ValueSetConceptSetComponent = ValueSetConceptSetComponent;
class ValueSetComposeComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('lockedDate')) {
                this.lockedDate = new Date(obj.lockedDate);
            }
            if (obj.hasOwnProperty('inactive')) {
                this.inactive = obj.inactive;
            }
            if (obj.hasOwnProperty('include')) {
                this.include = [];
                for (const o of obj.include || []) {
                    this.include.push(new ValueSetConceptSetComponent(o));
                }
            }
            if (obj.hasOwnProperty('exclude')) {
                this.exclude = [];
                for (const o of obj.exclude || []) {
                    this.exclude.push(new ValueSetConceptSetComponent(o));
                }
            }
        }
    }
}
exports.ValueSetComposeComponent = ValueSetComposeComponent;
class ValueSetParameterComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('value')) {
                this.value = new Element(obj.value);
            }
        }
    }
}
exports.ValueSetParameterComponent = ValueSetParameterComponent;
class ValueSetContainsComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('system')) {
                this.system = obj.system;
            }
            if (obj.hasOwnProperty('abstract')) {
                this.abstract = obj.abstract;
            }
            if (obj.hasOwnProperty('inactive')) {
                this.inactive = obj.inactive;
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('code')) {
                this.code = obj.code;
            }
            if (obj.hasOwnProperty('display')) {
                this.display = obj.display;
            }
            if (obj.hasOwnProperty('designation')) {
                this.designation = [];
                for (const o of obj.designation || []) {
                    this.designation.push(new ValueSetDesignationComponent(o));
                }
            }
            if (obj.hasOwnProperty('contains')) {
                this.contains = [];
                for (const o of obj.contains || []) {
                    this.contains.push(new ValueSetContainsComponent(o));
                }
            }
        }
    }
}
exports.ValueSetContainsComponent = ValueSetContainsComponent;
class ValueSetExpansionComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = obj.identifier;
            }
            if (obj.hasOwnProperty('timestamp')) {
                this.timestamp = new Date(obj.timestamp);
            }
            if (obj.hasOwnProperty('total')) {
                this.total = obj.total;
            }
            if (obj.hasOwnProperty('offset')) {
                this.offset = obj.offset;
            }
            if (obj.hasOwnProperty('parameter')) {
                this.parameter = [];
                for (const o of obj.parameter || []) {
                    this.parameter.push(new ValueSetParameterComponent(o));
                }
            }
            if (obj.hasOwnProperty('contains')) {
                this.contains = [];
                for (const o of obj.contains || []) {
                    this.contains.push(new ValueSetContainsComponent(o));
                }
            }
        }
    }
}
exports.ValueSetExpansionComponent = ValueSetExpansionComponent;
class ValueSet extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'ValueSet';
        if (obj) {
            if (obj.hasOwnProperty('url')) {
                this.url = obj.url;
            }
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('version')) {
                this.version = obj.version;
            }
            if (obj.hasOwnProperty('name')) {
                this.name = obj.name;
            }
            if (obj.hasOwnProperty('title')) {
                this.title = obj.title;
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('experimental')) {
                this.experimental = obj.experimental;
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('publisher')) {
                this.publisher = obj.publisher;
            }
            if (obj.hasOwnProperty('contact')) {
                this.contact = [];
                for (const o of obj.contact || []) {
                    this.contact.push(new ContactDetail(o));
                }
            }
            if (obj.hasOwnProperty('description')) {
                this.description = obj.description;
            }
            if (obj.hasOwnProperty('useContext')) {
                this.useContext = [];
                for (const o of obj.useContext || []) {
                    this.useContext.push(new UsageContext(o));
                }
            }
            if (obj.hasOwnProperty('jurisdiction')) {
                this.jurisdiction = [];
                for (const o of obj.jurisdiction || []) {
                    this.jurisdiction.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('immutable')) {
                this.immutable = obj.immutable;
            }
            if (obj.hasOwnProperty('purpose')) {
                this.purpose = obj.purpose;
            }
            if (obj.hasOwnProperty('copyright')) {
                this.copyright = obj.copyright;
            }
            if (obj.hasOwnProperty('compose')) {
                this.compose = new ValueSetComposeComponent(obj.compose);
            }
            if (obj.hasOwnProperty('expansion')) {
                this.expansion = new ValueSetExpansionComponent(obj.expansion);
            }
        }
    }
}
exports.ValueSet = ValueSet;
class VerificationResultPrimarySourceComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('type')) {
                this.type = [];
                for (const o of obj.type || []) {
                    this.type.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('validationProcess')) {
                this.validationProcess = [];
                for (const o of obj.validationProcess || []) {
                    this.validationProcess.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('validationStatus')) {
                this.validationStatus = new CodeableConcept(obj.validationStatus);
            }
            if (obj.hasOwnProperty('validationDate')) {
                this.validationDate = new Date(obj.validationDate);
            }
            if (obj.hasOwnProperty('canPushUpdates')) {
                this.canPushUpdates = new CodeableConcept(obj.canPushUpdates);
            }
            if (obj.hasOwnProperty('pushTypeAvailable')) {
                this.pushTypeAvailable = [];
                for (const o of obj.pushTypeAvailable || []) {
                    this.pushTypeAvailable.push(new CodeableConcept(o));
                }
            }
        }
    }
}
exports.VerificationResultPrimarySourceComponent = VerificationResultPrimarySourceComponent;
class VerificationResultAttestationComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('source')) {
                this.source = new ResourceReference(obj.source);
            }
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('method')) {
                this.method = new CodeableConcept(obj.method);
            }
            if (obj.hasOwnProperty('date')) {
                this.date = new Date(obj.date);
            }
            if (obj.hasOwnProperty('sourceIdentityCertificate')) {
                this.sourceIdentityCertificate = obj.sourceIdentityCertificate;
            }
            if (obj.hasOwnProperty('proxyIdentityCertificate')) {
                this.proxyIdentityCertificate = obj.proxyIdentityCertificate;
            }
            if (obj.hasOwnProperty('signedProxyRight')) {
                this.signedProxyRight = new Element(obj.signedProxyRight);
            }
            if (obj.hasOwnProperty('signedSourceAttestation')) {
                this.signedSourceAttestation = new Element(obj.signedSourceAttestation);
            }
        }
    }
}
exports.VerificationResultAttestationComponent = VerificationResultAttestationComponent;
class VerificationResultValidatorComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('organization')) {
                this.organization = new ResourceReference(obj.organization);
            }
            if (obj.hasOwnProperty('identityCertificate')) {
                this.identityCertificate = obj.identityCertificate;
            }
            if (obj.hasOwnProperty('signedValidatorAttestation')) {
                this.signedValidatorAttestation = new Element(obj.signedValidatorAttestation);
            }
        }
    }
}
exports.VerificationResultValidatorComponent = VerificationResultValidatorComponent;
class VerificationResult extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'VerificationResult';
        if (obj) {
            if (obj.hasOwnProperty('target')) {
                this.target = [];
                for (const o of obj.target || []) {
                    this.target.push(new ResourceReference(o));
                }
            }
            if (obj.hasOwnProperty('targetLocation')) {
                this.targetLocation = obj.targetLocation;
            }
            if (obj.hasOwnProperty('need')) {
                this.need = new CodeableConcept(obj.need);
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('statusDate')) {
                this.statusDate = new Date(obj.statusDate);
            }
            if (obj.hasOwnProperty('validationType')) {
                this.validationType = new CodeableConcept(obj.validationType);
            }
            if (obj.hasOwnProperty('validationProcess')) {
                this.validationProcess = [];
                for (const o of obj.validationProcess || []) {
                    this.validationProcess.push(new CodeableConcept(o));
                }
            }
            if (obj.hasOwnProperty('frequency')) {
                this.frequency = new Timing(obj.frequency);
            }
            if (obj.hasOwnProperty('lastPerformed')) {
                this.lastPerformed = new Date(obj.lastPerformed);
            }
            if (obj.hasOwnProperty('nextScheduled')) {
                this.nextScheduled = new Date(obj.nextScheduled);
            }
            if (obj.hasOwnProperty('failureAction')) {
                this.failureAction = new CodeableConcept(obj.failureAction);
            }
            if (obj.hasOwnProperty('primarySource')) {
                this.primarySource = [];
                for (const o of obj.primarySource || []) {
                    this.primarySource.push(new VerificationResultPrimarySourceComponent(o));
                }
            }
            if (obj.hasOwnProperty('attestation')) {
                this.attestation = new VerificationResultAttestationComponent(obj.attestation);
            }
            if (obj.hasOwnProperty('validator')) {
                this.validator = [];
                for (const o of obj.validator || []) {
                    this.validator.push(new VerificationResultValidatorComponent(o));
                }
            }
        }
    }
}
exports.VerificationResult = VerificationResult;
class VisionPrescriptionPrismComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('amount')) {
                this.amount = obj.amount;
            }
            if (obj.hasOwnProperty('base')) {
                this.base = obj.base;
            }
        }
    }
}
exports.VisionPrescriptionPrismComponent = VisionPrescriptionPrismComponent;
class VisionPrescriptionDispenseComponent extends BackboneElement {
    constructor(obj) {
        super(obj);
        if (obj) {
            if (obj.hasOwnProperty('product')) {
                this.product = new CodeableConcept(obj.product);
            }
            if (obj.hasOwnProperty('eye')) {
                this.eye = obj.eye;
            }
            if (obj.hasOwnProperty('sphere')) {
                this.sphere = obj.sphere;
            }
            if (obj.hasOwnProperty('cylinder')) {
                this.cylinder = obj.cylinder;
            }
            if (obj.hasOwnProperty('axis')) {
                this.axis = obj.axis;
            }
            if (obj.hasOwnProperty('prism')) {
                this.prism = [];
                for (const o of obj.prism || []) {
                    this.prism.push(new VisionPrescriptionPrismComponent(o));
                }
            }
            if (obj.hasOwnProperty('add')) {
                this.add = obj.add;
            }
            if (obj.hasOwnProperty('power')) {
                this.power = obj.power;
            }
            if (obj.hasOwnProperty('backCurve')) {
                this.backCurve = obj.backCurve;
            }
            if (obj.hasOwnProperty('diameter')) {
                this.diameter = obj.diameter;
            }
            if (obj.hasOwnProperty('duration')) {
                this.duration = new SimpleQuantity(obj.duration);
            }
            if (obj.hasOwnProperty('color')) {
                this.color = obj.color;
            }
            if (obj.hasOwnProperty('brand')) {
                this.brand = obj.brand;
            }
            if (obj.hasOwnProperty('note')) {
                this.note = [];
                for (const o of obj.note || []) {
                    this.note.push(new Annotation(o));
                }
            }
        }
    }
}
exports.VisionPrescriptionDispenseComponent = VisionPrescriptionDispenseComponent;
class VisionPrescription extends DomainResource {
    constructor(obj) {
        super(obj);
        this.resourceType = 'VisionPrescription';
        if (obj) {
            if (obj.hasOwnProperty('identifier')) {
                this.identifier = [];
                for (const o of obj.identifier || []) {
                    this.identifier.push(new Identifier(o));
                }
            }
            if (obj.hasOwnProperty('status')) {
                this.status = obj.status;
            }
            if (obj.hasOwnProperty('patient')) {
                this.patient = new ResourceReference(obj.patient);
            }
            if (obj.hasOwnProperty('encounter')) {
                this.encounter = new ResourceReference(obj.encounter);
            }
            if (obj.hasOwnProperty('dateWritten')) {
                this.dateWritten = new Date(obj.dateWritten);
            }
            if (obj.hasOwnProperty('prescriber')) {
                this.prescriber = new ResourceReference(obj.prescriber);
            }
            if (obj.hasOwnProperty('reason')) {
                this.reason = new Element(obj.reason);
            }
            if (obj.hasOwnProperty('dispense')) {
                this.dispense = [];
                for (const o of obj.dispense || []) {
                    this.dispense.push(new VisionPrescriptionDispenseComponent(o));
                }
            }
        }
    }
}
exports.VisionPrescription = VisionPrescription;